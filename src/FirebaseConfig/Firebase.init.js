// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //   apiKey: "AIzaSyBV4Jtb1A-4N2cwgwcKDqsCb8tWTdXrYk0",
  //   authDomain: "fruits-hub.firebaseapp.com",
  //   projectId: "fruits-hub",
  //   storageBucket: "fruits-hub.appspot.com",
  //   messagingSenderId: "641155200119",
  //   appId: "1:641155200119:web:ae5980b7d31ac344bbc272",

  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
