const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();


const generateOtp = () => {
  return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
};

router.post("/send-otp", async (req, res) => {
  const { inputValue, otp } = req.body;
  console.log(`Emale: ${inputValue}, otp: ${otp}`);

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL, // your email address
      pass: process.env.PASS, // email app-password
    },
  });

  const msg = {
    to: inputValue,
    from: `"InternArea" <${process.env.EMAIL}>`,
    subject: "Your OTP Code",
    text: `Your OTP code is ${otp}`,
    html: `<strong>Your OTP code for email verification to change language is ${otp}</strong>`,
  };

  try {
    let info = await transporter.sendMail(msg);
    console.log("Message sent: %s", info.messageId);
    res.status(200).send("OTP sent successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending OTP");
  }
});

router.post("/generate-otp", (req, res) => {
  const otp = generateOtp();
  res.status(200).json({ otp });
});

module.exports = router;
