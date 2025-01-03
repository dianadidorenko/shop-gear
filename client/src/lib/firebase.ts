// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF_8DsAx0KPW8krZEXQ8NrL5GskENECU4",
  authDomain: "shop-gear-c2d72.firebaseapp.com",
  projectId: "shop-gear-c2d72",
  storageBucket: "shop-gear-c2d72.firebasestorage.app",
  messagingSenderId: "882249712130",
  appId: "1:882249712130:web:5b20ad2ed84e1c904b9d1b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
