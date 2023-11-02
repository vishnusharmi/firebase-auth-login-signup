import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBrJibTzQ_nTA0TLJ5JunxDtYso5IBxkug",
  authDomain: "fir-login-signup-f64c5.firebaseapp.com",
  projectId: "fir-login-signup-f64c5",
  storageBucket: "fir-login-signup-f64c5.appspot.com",
  messagingSenderId: "543255378341",
  appId: "1:543255378341:web:566a4d6e2db69ae4b9104c",
  measurementId: "G-N29GKPJ2PK",
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
