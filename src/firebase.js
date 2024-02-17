import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCkNVf7B2nSqjVwxyNl0nDevDHGMq8KcG8",
  authDomain: "trendybynour-9dbea.firebaseapp.com",
  projectId: "trendybynour-9dbea",
  storageBucket: "trendybynour-9dbea.appspot.com",
  messagingSenderId: "604217522210",
  appId: "1:604217522210:web:159302595a882a7195f27b",
  measurementId: "G-5GYMNH3F1V"
};

  const app = initializeApp(firebaseConfig);
 
  const auth = getAuth(app); auth.languageCode = 'it';
  export {auth} ;