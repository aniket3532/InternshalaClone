import React, { useEffect, useState } from "react";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";
import "./navbar.css";
import Sidebar from "./sidebar";
import { RecaptchaVerifier, signInWithPopup, signOut } from "firebase/auth";
import { auth, provider, setUpRecaptcha, signInWithPhoneNumber} from "../../Firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../../Feature/Userslice";
import { toast } from "react-toastify";
import LanguageDropdown from "./languageDropdown";
import axios from "axios";
import { useTranslation } from "react-i18next";
function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [isDivVisibleForintern, setDivVisibleForintern] = useState(false);
  const [isDivVisibleForJob, setDivVisibleFroJob] = useState(false);
  const [isDivVisibleForlogin, setDivVisibleFrologin] = useState(false);
  const [isDivVisibleForProfile, setDivVisibleProfile] = useState(false);
  const [isStudent, setStudent] = useState(true);

  // Phone authentication state
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [step, setStep] = useState(0);

  const {t} = useTranslation();


  const onCaptchVerify = () => {
    if(!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        'size': 'invisible',
        'callback': (response) => {
          //allow sign in with signinWithPhoneNumber
          requestOtp();
        },
        'expired-callback': () => {
          // Response expired ask user to solve the recaptcha again
          console.log('recaptcha error');
        }
      });
    }
  }

  // Request OTP function
  const requestOtp = () => {
    onCaptchVerify();
    const captchaVerifier = window.recaptchaVerifier;
    const formatph = '++91' + phoneNumber
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
  const verifyOtp = async() => {

    if (!window.confirmationResult) {
      console.log("No confirmation result found.");
      return;
    }
    console.log(otp);
    window.confirmationResult.confirm(otp)
      .then(async(res) => {
        // dispatch(
        //   login({
        //     name: res.user.displayName,
        //     email: res.user.email,
        //     phone: res.user.phoneNumber,
        //   })
        // );
        // toast.success("success");
        // console.log(res);


        const user = res.user;
      // const user = res.user;
      // logoutFunction();
  
      // console.log(res);
        const email = prompt("Enter your email address for verification: ");
      const loginResponse = await axios.post('https://internshalaclone.onrender.com/api/login/handleLogin', {
        email: email
      });
  
      console.log(loginResponse.data);
  
      if (loginResponse.data.message.includes('OTP sent')) {
        // Handle OTP verification
        const otp = prompt("Enter the OTP sent to your email:");
        if (!otp) {
          alert("OTP input cancelled.");
          return;
        }
  
        const otpResponse = await axios.post('https://internshalaclone.onrender.com/api/login/verify-otp', {
          email: email,
          otp: otp,
          matchotp: loginResponse.data.otp 
        });
        console.log(`here it is br0, ${otpResponse.data}`);
        if (otpResponse.data === 'OTP verified. Login successful.') {
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
          setDivVisibleFrologin(false);
        }
      } else if (loginResponse.data.message.includes('Login successful')) {
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
      })
      .catch((error) => {
        alert(error.message);
        console.log(error);
      });
    setDivVisibleFrologin(false);
  };

  const loginFunction = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      const user = res.user;
      // const user = res.user;
      // logoutFunction();
  
      console.log(user);
  
      const loginResponse = await axios.post('https://internshalaclone.onrender.com/api/login/handleLogin', {
        email: user.email
      });
  
      console.log(loginResponse.data);
  
      if (loginResponse.data.message.includes('OTP sent')) {
        // Handle OTP verification
        const otp = prompt("Enter the OTP sent to your email:");
        if (!otp) {
          alert("OTP input cancelled.");
          return;
        }
  
        const otpResponse = await axios.post('https://internshalaclone.onrender.com/api/login/verify-otp', {
          email: user.email,
          otp: otp,
          matchotp: loginResponse.data.otp 
        });
        console.log(`here it is br0, ${otpResponse.data}`);
        if (otpResponse.data === 'OTP verified. Login successful.') {
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
          setDivVisibleFrologin(false);
        }
      } else if (loginResponse.data.message.includes('Login successful')) {
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
    } catch (error) {
      console.error('Error during login:', error);
      // logoutFunction();
      // alert("An error occurred during login. Please try again.");
    } finally {
      setDivVisibleFrologin(false);
    }
  };

  const showLogin = () => {
    setDivVisibleFrologin(true);
  };
  const closeLogin = () => {
    setDivVisibleFrologin(false);
  };
  const setTrueForStudent = () => {
    setStudent(false);
  };
  const setFalseForStudent = () => {
    setStudent(true);
  };
  //  for showing profile dropdown
  const showtheProfile = () => {
    setDivVisibleProfile(true);
    document.getElementById("ico3").className = "bi bi-caret-up-fill";
  };
  const hidetheProfile = () => {
    document.getElementById("ico3").className = "bi bi-caret-down-fill";
    setDivVisibleProfile(false);
  };

  const showInternShips = () => {
    document.getElementById("ico").className = "bi bi-caret-up-fill";
    setDivVisibleForintern(true);
  };
  const hideInternShips = () => {
    document.getElementById("ico").className = "bi bi-caret-down-fill";
    setDivVisibleForintern(false);
  };
  const showJobs = () => {
    document.getElementById("ico2").className = "bi bi-caret-up-fill";
    setDivVisibleFroJob(true);
  };
  const hideJobs = () => {
    document.getElementById("ico2").className = "bi bi-caret-down-fill";
    setDivVisibleFroJob(false);
  };

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

  return (
    <div>
      <nav className="nav1">
        <ul>
          <div className="img">
            <Link to={"/"}>
              <img src={logo} alt="" srcSet="" />
            </Link>
          </div>
          <div className="elem">
            <Link to={"/Internship"}>
              {" "}
              <p id="int" className="" onMouseEnter={showInternShips}>
                {" "}
                {t("internships")}{" "}
                <i
                  onClick={hideInternShips}
                  id="ico"
                  className="bi bi-caret-down-fill"
                ></i>
              </p>
            </Link>
            <Link to={"/Jobs"}>
              {" "}
              <p onMouseEnter={showJobs}>
                {t("jobs")}{" "}
                <i
                  class="bi bi-caret-down-fill"
                  id="ico2"
                  onClick={hideJobs}
                ></i>
              </p>
            </Link>
          </div>
          <div className="search">
            <i class="bi bi-search"></i>
            <input type="text" placeholder="Search" />
          </div>
          <div className="language mt-5"><LanguageDropdown /></div>
          {user ? (
            <>
              <div className="Profile">
                <Link to={"/profile"}>
                  <img
                    src={user?.photo}
                    alt=""
                    onMouseEnter={showtheProfile}
                    className="rounded-full w-12"
                    id="picpro"
                  />
                  <i
                    className="bi bi-caret-up-fill"
                    id="ico3"
                    onClick={hidetheProfile}
                  ></i>
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="auth">
                <button className="btn1" onClick={showLogin}>
                  {t("login")}
                </button>

                <button className="btn2">
                  <Link to="/register">{t("register")}</Link>
                </button>
              </div>
            </>
          )}
          {user ? (
            <>
              <button className="bt-log" id="bt" onClick={logoutFunction}>
                {t("logout")} <i class="bi bi-box-arrow-right"></i>
              </button>
            </>
          ) : (
            <>
              <div className="flex mt-7 hire">{t("hire_talent")}</div>
              <Link to={"/adminLogin"}>
              <div className="admin">
              
                
                  <button>{t("admin")}</button>{" "}
                
              </div>
              </Link>
            </>
          )}
        </ul>
        
      </nav>
      <div id="recaptcha-container"></div>
      {isDivVisibleForintern && (
        <div className="profile-dropdown-2">
          <div className="left-section">
            <p>{t("top_locations")}</p>
            <p>{t("profile")}</p>
            <p>{t("top_category")}</p>
            <p>{t("explore_more_internships")}</p>
          </div>
          <div className="line flex bg-slate-400"></div>
          <div className="right-section">
            <p>{t("intern_at_india")}</p>
            <p>{t("intern_at_india")}</p>
            <p>{t("intern_at_india")}</p>
            <p>{t("intern_at_india")}</p>
            <p>{t("intern_at_india")}</p>
          </div>
        </div>
      )}
      {isDivVisibleForJob && (
        <div className="profile-dropdown-1">
          <div className="left-section">
            <p>{t("top_locations")}</p>
            <p>{t("profile")}</p>
            <p>{t("top_category")}</p>
            <p>{t("explore_more_internships")}</p>
          </div>
          <div className="line flex bg-slate-400"></div>
          <div className="right-section">
            <p>{t("intern_at_india")}</p>
            <p>{t("intern_at_india")}</p>
            <p>{t("intern_at_india")}</p>
            <p>{t("intern_at_india")}</p>
            <p>{t("intern_at_india")}</p>
          </div>
        </div>
      )}
      <div className="login">
        {isDivVisibleForlogin && (
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
                        onClick={loginFunction}
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
        {isDivVisibleForProfile && (
          <div className="profile-dropdown h-16 rounded-sm shadow-sm">
            <p className="font-bold">{user?.name}</p>
            <p className="font-medium">{user?.email}</p>
          </div>
        )}
      </div>
  
      <Sidebar />
    </div>
  );
}

export default Navbar;
