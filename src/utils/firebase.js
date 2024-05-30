// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmSoNBEmh8NHLXPB800vHc1NIykC7MgQY",
  authDomain: "netflix-gpt-af19f.firebaseapp.com",
  projectId: "netflix-gpt-af19f",
  storageBucket: "netflix-gpt-af19f.appspot.com",
  messagingSenderId: "983151658001", 
  appId: "1:983151658001:web:8a051ec42b84dafa981db0",
  measurementId: "G-305BLYJH6E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()