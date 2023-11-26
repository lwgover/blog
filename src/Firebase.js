// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD41JxoIEt_sLn3PnVmp6P3Dn0yq6Z_QRc",
  authDomain: "blog-397f9.firebaseapp.com",
  projectId: "blog-397f9",
  storageBucket: "blog-397f9.appspot.com",
  messagingSenderId: "302244513617",
  appId: "1:302244513617:web:68c3c7005bb4cad90bb570",
  measurementId: "G-T331K26FTT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);