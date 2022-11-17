import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
import firebase from 'firebase/compat';
const firebaseConfig = {
  apiKey: "AIzaSyCdAMZS_MXLayHuikcwvoypWgCofCBvs5Y",
  authDomain: "falak-28f37.firebaseapp.com",
  projectId: "falak-28f37",
  storageBucket: "falak-28f37.appspot.com",
  messagingSenderId: "234584467097",
  appId: "1:234584467097:web:4549f22906634af6cb7a08",
  measurementId: "G-0PTQ8SHZ7T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {app,db}