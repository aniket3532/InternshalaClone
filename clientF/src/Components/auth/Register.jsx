import React, { useState } from "react";
import { RecaptchaVerifier, signInWithPopup, signOut } from "firebase/auth";
import "./register.css";
import { auth, provider, signInWithPhoneNumber } from "../../Firebase/firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { login, logout } from "../../Feature/Userslice";
import axios from "axios";
import { useTranslation } from "react-i18next";
function Register() {
  const [isStudent, setStudent] = useState(true);
  const [isDivVisible, setDivVisible] = useState(false);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Phone authentication state
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [step, setStep] = useState(0);

  const { t } = useTranslation();

  const logoutFunction = async () => {
    navigate("/");
    await signOut(auth)
      .then(() => {
        dispatch(logout());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onCaptchVerify = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            //allow sign in with signinWithPhoneNumber
            requestOtp();
          },
          "expired-callback": () => {
            // Response expired ask user to solve the recaptcha again
            console.log("recaptcha error");
          },
        }
      );
    }
  };

  // Request OTP function
  const requestOtp = () => {
    onCaptchVerify();
    const captchaVerifier = window.recaptchaVerifier;
    const formatph = "++91" + phoneNumber;
    console.log(formatph);
    signInWithPhoneNumber(auth, formatph, captchaVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setVerificationId(confirmationResult.verificationId);
        setStep(2);
        toast.success("OTP sent successfully");
      })
      .catch((error) => {
        // alert(error.message);
        console.log(error);
      });
  };

  // Verify OTP function
  const verifyOtp = () => {
    if (!window.confirmationResult) {
      console.log("No confirmation result found.");
      return;
    }
    console.log(otp);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {


        const user = res.user;
        
        const email = prompt("Please enter your email for verification: ");

        const loginResponse = await axios.post(
          "https://internshalaclone.onrender.com/api/login/handleLogin",
          {
            email: email,
          }
        );

        console.log(loginResponse.data);

        if (loginResponse.data.message.includes("OTP sent")) {
          // Handle OTP verification
          const otp = prompt("Enter the OTP sent to your email:");
          if (!otp) {
            alert("OTP input cancelled.");
            return;
          }

          const otpResponse = await axios.post(
            "https://internshalaclone.onrender.com/api/login/verify-otp",
            {
              email: email,
              otp: otp,
              matchotp: loginResponse.data.otp,
            }
          );
          console.log(`here it is br0, ${otpResponse.data}`);
          if (otpResponse.data === "OTP verified. Login successful.") {
            // const res = await signInWithPopup(auth, provider);
            // const user = res.user;
            dispatch(
              login({
                name: user.displayName,
                email: email,
                phone: user.phoneNumber,
              })
            );
            navigate("/");
          } else {
            alert("OTP verification failed.");
            logoutFunction();
            // setDivVisibleFrologin(false);
          }
        } else if (loginResponse.data.message.includes("Login successful")) {
          // const res = await signInWithPopup(auth, provider);
          // const user = res.user;
          dispatch(
            login({
              name: user.displayName,
              email: email,
              phone: user.phoneNumber,
            })
          );
          navigate("/");
        }
        else if(loginResponse.data.message.includes('Access denied')){
          alert('Access denied for mobile devices during these hours');
          logoutFunction();
        }
      })
      .catch((error) => {
        alert(error.message);
        console.log(error);
      });
    setDivVisible(false);
  };

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSingin = async () => {
    signInWithPopup(auth, provider)
      .then(async (res) => {
        // dispatch(
        //   login({
        //     name: res.user.displayName,
        //     email: res.user.email,
        //     photo: res.user.photoURL,
        //   })
        // );
        // console.log(res);

        // navigate("/");

        const user = res.user;

        const loginResponse = await axios.post(
          "https://internshalaclone.onrender.com/api/login/handleLogin",
          {
            email: user.email,
          }
        );

        console.log(loginResponse.data);

        if (loginResponse.data.message.includes("OTP sent")) {
          // Handle OTP verification
          const otp = prompt("Enter the OTP sent to your email:");
          if (!otp) {
            alert("OTP input cancelled.");
            return;
          }

          const otpResponse = await axios.post(
            "https://internshalaclone.onrender.com/api/login/verify-otp",
            {
              email: user.email,
              otp: otp,
              matchotp: loginResponse.data.otp,
            }
          );
          console.log(`here it is br0, ${otpResponse.data}`);
          if (otpResponse.data === "OTP verified. Login successful.") {
            // const res = await signInWithPopup(auth, provider);
            // const user = res.user;
            dispatch(
              login({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
              })
            );
            navigate("/");
          } else {
            alert("OTP verification failed.");
            logoutFunction();
            // setDivVisibleFrologin(false);
          }
        } else if (loginResponse.data.message.includes("Login successful")) {
          // const res = await signInWithPopup(auth, provider);
          // const user = res.user;
          dispatch(
            login({
              name: user.displayName,
              email: user.email,
              photo: user.photoURL,
            })
          );
          navigate("/");
        }
        else if(loginResponse.data.message.includes('Access denied')){
          alert('Access denied for mobile devices during these hours');
          logoutFunction();
        }
      })
      .catch((err) => {
        console.log(err);
      });
    toast("Login Success");
  };
  const setTrueForStudent = () => {
    setStudent(false);
  };
  const setFalseForStudent = () => {
    setStudent(true);
  };
  const showLogin = () => {
    setDivVisible(true);
  };
  const closeLogin = () => {
    setDivVisible(false);
  };
  return (
    <div>
      <div className="form">
        <h1>{t("sign_up_and_apply_for_free")}</h1>
        <p className="para3">{t("companies_hiring")}</p>
        <div id="recaptcha-container"></div>
        <div className="regi">
          <div className="py-6">
            <div className="flex bg-white rounded-lg justify-center shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
              <div className="w-full p-8 lg:w-1/2">
                <a
                  onClick={handleSingin}
                  class="flex items-center h-9 justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
                >
                  <div class="px-4 py-3 cursor-pointer">
                    <svg class="h-6 w-6" viewBox="0 0 40 40">
                      <path
                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                        fill="#FFC107"
                      />
                      <path
                        d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                        fill="#FF3D00"
                      />
                      <path
                        d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                        fill="#4CAF50"
                      />
                      <path
                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                        fill="#1976D2"
                      />
                    </svg>
                  </div>
                  <h1 class="cursor-pointer px-4 py-3 w-5/6 text-center text-xl text-gray-600 font-bold">
                    {t("sign_in_with_google")}
                  </h1>
                </a>
                <a
                  onClick={() => setStep(1)}
                  class="flex items-center h-9 justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
                >
                  <div class="px-4 py-3 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-phone"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                      <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                    </svg>
                  </div>
                  <h1 class="cursor-pointer px-4 py-3 w-5/6 text-center text-xl text-gray-600 font-bold">
                    {t("sign_in_with_phone")}
                  </h1>
                </a>
                <div className="mt-4 flex items-center justify-between">
                  <span className="border-b w-1/5 lg:w1/4"></span>
                  <a
                    href="/"
                    className="text-xs text-center text-gray-500 uppercase"
                  >
                    {t("or")}
                  </a>
                  <span className="border-b w-1/5 lg:w1/4"></span>
                </div>
                {step > 0 && (
                  <>
                    <div className="mt-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        {t("phone_number")}
                      </label>
                      <input
                        className="text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                        type="text"
                        placeholder="Enter your phone number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                    {step === 2 && (
                      <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          {t("otp")}
                        </label>
                        <input
                          className="text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                          type="text"
                          placeholder="Enter the OTP"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                        />
                      </div>
                    )}
                    <div className="mt-8">
                      <button
                        className="btn3 bg-blue-500 h-9 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600"
                        onClick={step === 1 ? requestOtp : verifyOtp}
                      >
                        {step === 1 ? t("request_otp") : t("verify_otp")}
                      </button>
                    </div>
                  </>
                )}
                {step === 0 && (
                  <>
                    <div className="mt-4">
                      <label
                        htmlFor="email"
                        className="border-b text-gray-700 text-sm font-bold mb-2"
                      >
                        {t("email")}
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                        id="email"
                      />
                    </div>
                    <div className="mt-4">
                      <label
                        htmlFor="password"
                        className="border-b text-gray-700 text-sm font-bold mb-2"
                      >
                        {t("password")}
                      </label>
                      <input
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                        id="password"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <label
                          htmlFor="Fname"
                          className="border-b text-gray-700 text-sm font-bold mb-2"
                        >
                          {t("first_name")}
                        </label>
                        <input
                          type="text"
                          className="text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                          id="Fname"
                          value={fname}
                          onChange={(e) => setFname(e.target.value)}
                        />
                      </div>
                      <div className="ml-5">
                        <label
                          htmlFor="Lname"
                          className="border-b text-gray-700 text-sm font-bold mb-2"
                        >
                          {t("last_name")}
                        </label>
                        <input
                          type="text"
                          className="text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                          id="Lname"
                          value={lname}
                          onChange={(e) => setLname(e.target.value)}
                        />
                      </div>
                    </div>
                    <small>
                      {t("agree_terms")}{" "}
                      <span className="text-blue-400">
                        {t("terms_and_conditions")}
                      </span>
                    </small>
                    <button className="bg-blue-500 h-9 text-white font-bold py-2 mt-4 px-4 w-full rounded hover:bg-blue-600">
                      {t("sign_up")}{" "}
                    </button>
                    {t("already_registered")}{" "}
                    <span
                      className="text-blue-400 cursor-pointer"
                      onClick={showLogin}
                    >
                      {t("login")}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="login">
        {isDivVisible && (
          <>
            <button id="cross" onClick={closeLogin}>
              <i class="bi bi-x"></i>
            </button>
            <h5 id="state" className="mb-4 justify-center text-center">
              <span
                id="Sign-in"
                style={{ cursor: "pointer" }}
                className={`auth-tab ${isStudent ? "active" : ""}`}
                onClick={setFalseForStudent}
              >
                {t("student")}
              </span>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <span
                id="join-in"
                style={{ cursor: "pointer" }}
                className={`auth-tab ${isStudent ? "active" : ""}`}
                onClick={setTrueForStudent}
              >
                {t("employee_and_tp")}
              </span>
            </h5>
            {isStudent ? (
              <>
                <div className="py-6">
                  <div className="flex bg-white rounded-lg justify-center overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                    <div className="w-full p-8 lg:w-1/2">
                      <p
                        onClick={handleSingin}
                        className="flex items-center h-9 justify-center mt-4 text-white bg-slate-100 rounded-lg hover:bg-gray-100"
                      >
                        <div className="px-4 py-3">
                          <svg class="h-6 w-6" viewBox="0 0 40 40">
                            <path
                              d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                              fill="#FFC107"
                            />
                            <path
                              d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                              fill="#FF3D00"
                            />
                            <path
                              d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                              fill="#4CAF50"
                            />
                            <path
                              d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                              fill="#1976D2"
                            />
                          </svg>
                        </div>
                        <h4 className="text-gray-500">{t("login_with_google")}</h4>
                      </p>
                      <p
                        onClick={() => setStep(1)}
                        className=" cursor-pointer flex items-center h-9 justify-center mt-4 text-white bg-slate-100 rounded-lg hover:bg-gray-100"
                      >
                        <div className="px-4 py-3 cursor-pointer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-phone"
                            viewBox="0 0 16 16"
                          >
                            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                          </svg>
                        </div>
                        <h4 className="text-gray-500">{t("login_with_phone")}</h4>
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="border-b- w-1/5 lg:w-1/4"></span>
                        <p className="text-gray-500 text sm font-bold mb-2">
                          {" "}
                          {t("or")}
                        </p>
                        <span className="border-b- w-1/5 lg:w-1/4"></span>
                      </div>
                      {step > 0 && (
                        <>
                          <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                              {t("phone_number")}
                            </label>
                            <input
                              className="text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                              type="text"
                              placeholder="Enter your phone number"
                              value={phoneNumber}
                              onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                          </div>
                          {step === 2 && (
                            <div className="mt-4">
                              <label className="block text-gray-700 text-sm font-bold mb-2">
                                {t("otp")}
                              </label>
                              <input
                                className="text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                                type="text"
                                placeholder="Enter the OTP"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                              />
                            </div>
                          )}
                          <div className="mt-8">
                            <button
                              className="btn3 bg-blue-500 h-9 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600"
                              onClick={step === 1 ? requestOtp : verifyOtp}
                            >
                              {step === 1 ? t("request_otp") : t("verify_otp")}
                            </button>
                          </div>
                        </>
                      )}
                      {step === 0 && (
                        <>
                          <div class="mt-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2">
                              {t("email")}{" "}
                            </label>
                            <input
                              class=" text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                              type="email"
                              placeholder="john@example.com"
                            />
                          </div>
                          <div class="mt-4">
                            <div class="flex justify-between">
                              <label class="block text-gray-700 text-sm font-bold mb-2">
                                {t("password")}
                              </label>
                              <a href="/" class="text-xs text-blue-500">
                                {t("forget_password")}
                              </a>
                            </div>
                            <input
                              class=" text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                              placeholder="Must be atleast 6 characters"
                              type="password"
                            />
                          </div>
                          <div className="mt-8">
                            <button className="btn3  bg-blue-500 h-9 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600 ">
                              {t("login")}
                            </button>
                          </div>
                        </>
                      )}

                      <div className="mt-4 flex items-center justify-between">
                        <p className="text-sm">
                          {t("new_to_internarea")}(
                          <span
                            className="text-blue-500 cursor-pointer"
                            onClick={closeLogin}
                          >
                            {t("student")}
                          </span>
                          /
                          <span
                            className="text-blue-500 cursor-pointer"
                            onClick={closeLogin}
                          >
                            {t("company")}
                          </span>
                          ){" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex bg-white rounded-lg justify-center overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                  <div className="w-full p-8 lg:w-1/2">
                    <div class="mt-4">
                      <label class="block text-gray-700 text-sm font-bold mb-2">
                        {t("email")}{" "}
                      </label>
                      <input
                        class=" text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                        type="email"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div class="mt-4">
                      <div class="flex justify-between">
                        <label class="block text-gray-700 text-sm font-bold mb-2">
                          {t("password")}
                        </label>
                        <a href="/" class="text-xs text-blue-500">
                          {t("forget_password")}
                        </a>
                      </div>
                      <input
                        class=" text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                        placeholder="Must be atleast 6 characters"
                        type="password"
                      />
                    </div>
                    <div className="mt-8">
                      <button className="btn3  bg-blue-500 h-9 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600 ">
                        {t("login")}
                      </button>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <p className="text-sm">
                        {t("new_to_internarea")}(
                        <span
                          className="text-blue-500 cursor-pointer"
                          onClick={closeLogin}
                        >
                          {t("student")}
                        </span>
                        /
                        <span
                          className="text-blue-500 cursor-pointer"
                          onClick={closeLogin}
                        >
                          {t("company")}
                        </span>
                        ){" "}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Register;
