import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { GlobeIcon } from "@heroicons/react/outline";
import "./navbar.css";
import Modal from "react-modal";
import { auth } from "../../Firebase/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast } from "react-toastify";

const LanguageDropdown = () => {
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isInputModalOpen, setIsInputModalOpen] = useState(false);
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [otpValue, setOtpValue] = useState("");
  const [generateotp, setGenerateOtp] = useState('');


  const generateOtp = async () => {
    try {
      
      const response = await axios.post('http://localhost:5000/api/verification/generate-otp');
      setIsOtpModalOpen(true);
      setGenerateOtp(response.data.otp);
      sendOtp(response.data.otp);
    } catch (error) {
      console.error('Error generating OTP:', error);
    }
    setIsInputModalOpen(false);
  };

  const sendOtp = async (otp) => {
    try {
      console.log(inputValue);
      await axios.post('http://localhost:5000/api/verification/send-otp', { inputValue, otp });
      // setOtpValue(otp);
      
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  const verifyEmailOtp = () => {
    if(generateotp === otpValue) {
      i18n.changeLanguage(selectedLanguage);
      document.body.style.backgroundColor = "yellow";
      setIsOtpModalOpen(false);
  }
  else{
    alert("Please enter correct otp value")
  }
}

  const onCaptchVerify = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            requestOtp();
          },
          "expired-callback": () => {
            console.log("recaptcha error");
          },
        }
      );
    }
  };

  const requestOtp = () => {
    onCaptchVerify();
    const captchaVerifier = window.recaptchaVerifier;
    const formatph = "++91" + inputValue;
    console.log(formatph);
    signInWithPhoneNumber(auth, formatph, captchaVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setIsOtpModalOpen(true);
        toast.success("OTP sent successfully");
      })
      .catch((error) => {
        alert(error.message);
        console.log(error);
      });
      setIsInputModalOpen(false);
  };

  const verifyOtp = () => {
    if (!window.confirmationResult) {
      console.log("No confirmation result found.");
      return;
    }
    console.log(otpValue);
    window.confirmationResult
      .confirm(otpValue)
      .then(async (res) => {
        i18n.changeLanguage(selectedLanguage);
        switch (selectedLanguage) {
          case "hi":
            document.body.style.backgroundColor = "blue";
            break;
          case "zh":
            document.body.style.backgroundColor = "green";
            break;
          case "fr":
            document.body.style.backgroundColor = "yellow";
            break;
          default:
            document.body.style.backgroundColor = "white";
            break;
        } 
        toast.success("success");
        console.log(res);
      })
      .catch((error) => {
        alert(error.message);
        console.log(error);
      });
    setIsOtpModalOpen(false);
  };


  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setDropdownOpen(false);
    setIsInputModalOpen(true);
  };

  // const verifyPhoneNumber = () => {
  //   console.log("Verifying phone number for other languages");
  // };

  const languages = [
    { code: "en", label: t("english") },
    { code: "es", label: t("spanish") },
    { code: "hi", label: t("hindi") },
    { code: "pt", label: t("portuguese") },
    { code: "zh", label: t("chinese") },
    { code: "fr", label: t("french") },
  ];

  return (
    <div className="relative inline-block text-left">
      <div id="recaptcha-container"></div>
      <div>
        <button
          type="button"
          className="inline-flex justify-center items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          id="options-menu"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <GlobeIcon className="h-5 w-5 text-gray-700" />
          <svg
            className={`ml-2 h-5 w-5 transition-transform ${
              dropdownOpen ? "transform rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {dropdownOpen && (
        <div
          className="language-dropdown absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {languages.map((language) => (
              <div
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className="cursor-pointer text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                role="menuitem"
              >
                {language.label}
              </div>
            ))}
          </div>
        </div>
      )}

      <Modal
        isOpen={isInputModalOpen}
        onRequestClose={() => setIsInputModalOpen(false)}
        contentLabel="Input Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <h2>
          {selectedLanguage === "fr"
            ? t("enter_your_email")
            : t("enter_your_phone_number")}
        </h2>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="inputField"
        />
        <button onClick={selectedLanguage === "fr" ? generateOtp : requestOtp} className="submitButton">{t("send_otp")}</button>
      </Modal>

      {/* OTP Modal */}
      <Modal
        isOpen={isOtpModalOpen}
        onRequestClose={() => setIsOtpModalOpen(false)}
        contentLabel="OTP Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <h2>{t("enter_otp")}</h2>
        <input
          type="text"
          value={otpValue}
          onChange={(e) => setOtpValue(e.target.value)}
          className="inputField"
        />
        <button onClick={selectedLanguage === "fr" ? verifyEmailOtp : verifyOtp} className="submitButton">{t("verify_otp")}</button>
      </Modal>
    </div>
  );
};

export default LanguageDropdown;
