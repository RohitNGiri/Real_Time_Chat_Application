import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9TMlOU8DNb94lVs_XYeFmj5WzT2Mr2GM",
  authDomain: "chat-room-51ba6.firebaseapp.com",
  databaseURL: "https://chat-room-51ba6-default-rtdb.firebaseio.com",
  projectId: "chat-room-51ba6",
  storageBucket: "chat-room-51ba6.appspot.com",
  messagingSenderId: "420939904772",
  appId: "1:420939904772:web:168a7193b45cfffcbfc251",
  measurementId: "G-X1VB0RTP82"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()