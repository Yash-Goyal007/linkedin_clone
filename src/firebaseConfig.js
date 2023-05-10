// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhRTdqAjYPN49P2Eo-bwD_bLsetx99zs0",
  authDomain: "linkedin-clone-9bb99.firebaseapp.com",
  projectId: "linkedin-clone-9bb99",
  storageBucket: "linkedin-clone-9bb99.appspot.com",
  messagingSenderId: "617883296981",
  appId: "1:617883296981:web:4778f8746c494cab406e5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth,app};