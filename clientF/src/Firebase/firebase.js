// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1OGq5_0B2LXrOv_YYQXRKgcGiI8rR2JQ",
  authDomain: "internarea-c9334.firebaseapp.com",
  projectId: "internarea-c9334",
  storageBucket: "internarea-c9334.appspot.com",
  messagingSenderId: "44204856368",
  appId: "1:44204856368:web:edd47bfae66063730e49f5",
  measurementId: "G-EN888S1214"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();

const setUpRecaptcha = (containerId) => {
  return new RecaptchaVerifier(containerId, {}, auth);
};

export {auth,provider, setUpRecaptcha, signInWithPhoneNumber};