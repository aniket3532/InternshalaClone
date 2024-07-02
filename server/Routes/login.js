const express = require("express");
const router = express.Router();
const useragent = require("express-useragent");
const nodemailer = require("nodemailer");
const ip = require("ip");
const Login = require("../Model/LoginInfo");
require("dotenv").config();

router.use(useragent.express());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

// Function to send OTP email
const sendOtpEmail = (email, otp) => {
  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Your OTP Code from InternArea",
    text: `Your OTP code is ${otp}`,
    html: `<strong>Your OTP code for email verification in InternArea login is ${otp}</strong>`,
  };

  return transporter.sendMail(mailOptions);
};

// Middleware to check access restrictions
const checkAccessRestrictions = (req, res, next) => {
  const source = req.useragent.source;
  const isMobile = req.useragent.isMobile;
  const currentHour = new Date().getHours();

  if (isMobile && (currentHour < 10 || currentHour > 13)) {
    return res
      .status(403)
      .send("Access restricted to mobile devices between 10 AM and 1 PM.");
  }

  next();
};

router.get("/",(req,res)=>{
  res.send("the is backend of login new api")
})

// Route to handle login
router.post("/handleLogin", checkAccessRestrictions, async (req, res) => {
  const { email } = req.body;

  try {
    const ua = req.useragent;
    const ipAddress =
      req.headers["x-forwarded-for"] ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      req.ip;

    const browser = ua.browser || "Unknown";
    const os = ua.os || "Unknown";
    const platform = ua.platform || "Unknown";
    const deviceType = ua.isMobile ? "Mobile" : "Desktop";

    const loginDetails = new Login({
      email,
      ip: ipAddress,
      browser,
      os,
      platform,
      deviceType,
      timestamp: new Date(),
    });

    // Determine authentication flow based on browser type
    if (deviceType === "Mobile") {
      const currentHour = new Date().getHours();
      if (currentHour >= 10 && currentHour <= 13) {
        await loginDetails.save();
        res
          .status(200)
          .json({ message: "Login successful within allowed time" });
      } else {
        res.status(200).json({ message: "Access denied outside allowed time" });
      }
    }
    else if (browser.toLowerCase().includes("chrome")) {
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      await sendOtpEmail(email, otp);
      res.status(200).json({ message: "OTP sent", otp: otp });
    } else if (browser.toLowerCase().includes("edge")) {
      
      await loginDetails.save();
      res.status(200).json({ message: "Login successful without OTP" });
    }  else {
      
      await loginDetails.save();
      res.status(200).json({ message: "Login successful" });
    }
  } catch (error) {
    console.error("Error during login handling:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Route to verify OTP
router.post("/verify-otp", async (req, res) => {
  const { email, otp, matchotp } = req.body;

  if (otp === matchotp) {
    console.log("otp matched");
    const ua = req.useragent;
    const ipAddress =
      req.headers["x-forwarded-for"] ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      req.ip;

    const browser = ua.browser || "Unknown";
    const os = ua.os || "Unknown";
    const platform = ua.platform || "Unknown";
    const deviceType = ua.isMobile ? "Mobile" : "Desktop";

    const loginDetails = new Login({
      email,
      ip: ipAddress,
      browser,
      os,
      platform,
      deviceType,
      timestamp: new Date(),
    });

    await loginDetails.save();
    res.status(200).json("OTP verified. Login successful.");
  } else {
    console.log("wrong otp");
    res.status(200).json("Invalid otp. Login failed");
  }
});

// Route to get login history
router.get("/login-history/:email", (req, res) => {
  const email = req.params.email;

  Login.find({ email })
    .then((logins) => res.status(200).json(logins))
    .catch((err) => res.status(500).send("Error fetching login history."));
});

module.exports = router;
