
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBovLshYIf7DkxTYvxKt98uem8Swgc5igA",
  authDomain: "mehul-portfolio.firebaseapp.com",
  projectId: "mehul-portfolio",
  storageBucket: "mehul-portfolio.appspot.com",
  messagingSenderId: "679484893444",
  appId: "1:679484893444:web:5ba997071cf37e24a2c851"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();