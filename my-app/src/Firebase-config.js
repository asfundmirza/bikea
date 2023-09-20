import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzGsF7K6El5LbJVccc1wwTcvQFbmFkrz0",
  authDomain: "e-bike-e7fed.firebaseapp.com",
  projectId: "e-bike-e7fed",
  storageBucket: "e-bike-e7fed.appspot.com",
  messagingSenderId: "275966972403",
  appId: "1:275966972403:web:686d70d79eee459d160286",
  measurementId: "G-KBM5Q24EVQ",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
