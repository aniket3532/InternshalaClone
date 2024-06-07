// PhoneAuth.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../Feature/Userslice";
import { auth, setUpRecaptcha, signInWithPhoneNumber } from "../../Firebase/firebase";
import 'bootstrap-icons/font/bootstrap-icons.css';

const PhoneAuth = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [step, setStep] = useState(1);
  const dispatch = useDispatch();

  const requestOtp = () => {
    const recaptchaVerifier = setUpRecaptcha("recaptcha-container");
    signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier)
      .then((confirmationResult) => {
        setVerificationId(confirmationResult.verificationId);
        setStep(2);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const verifyOtp = () => {
    const credential = auth.PhoneAuthProvider.credential(verificationId, otp);
    auth.signInWithCredential(credential)
      .then((res) => {
        dispatch(login({
          name: res.user.displayName,
          email: res.user.email,
          phone: res.user.phoneNumber,
        }));
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        {step === 1 ? (
          <div>
            <h3 className="text-2xl font-semibold mb-4">Phone Number Authentication</h3>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter phone number"
              className="w-full px-3 py-2 border rounded mb-4"
            />
            <div id="recaptcha-container" className="mb-4"></div>
            <button
              onClick={requestOtp}
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Request OTP
            </button>
          </div>
        ) : (
          <div>
            <h3 className="text-2xl font-semibold mb-4">Enter OTP</h3>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="w-full px-3 py-2 border rounded mb-4"
            />
            <button
              onClick={verifyOtp}
              className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
            >
              Verify OTP
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhoneAuth;
