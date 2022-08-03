// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVcWIDFNne1Y4cMsa2vPAIRCbsS70AiMg",
  authDomain: "digimoney-bank.firebaseapp.com",
  projectId: "digimoney-bank",
  storageBucket: "digimoney-bank.appspot.com",
  messagingSenderId: "874184864855",
  appId: "1:874184864855:web:8f67775c7f014fcab65f12",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
