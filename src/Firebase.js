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
  appId: "1:302244513617:web:247598fcc241bde90bb570",
  measurementId: "G-712Z3H57M0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);