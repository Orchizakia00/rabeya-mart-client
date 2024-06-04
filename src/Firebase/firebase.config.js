// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOBCPKUN_YvcXtS_88WWzDGc0heXudrYw",
  authDomain: "rabeya-mart.firebaseapp.com",
  projectId: "rabeya-mart",
  storageBucket: "rabeya-mart.appspot.com",
  messagingSenderId: "407814745041",
  appId: "1:407814745041:web:6b87241d4dea5094764ef0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);