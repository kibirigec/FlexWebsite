// firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhibkU2ZsHLFC6rnBjD8mjJ03kHi3ubwo",
  authDomain: "flexevents-fdee6.firebaseapp.com",
  projectId: "flexevents-fdee6",
  storageBucket: "flexevents-fdee6.appspot.com",
  messagingSenderId: "887784403408",
  appId: "1:887784403408:web:19011713ce3953f82189d5",
  measurementId: "G-5E5SYYT3QD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore

export { db };
