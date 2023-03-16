import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvN971MTmw-l3A9h59nyD-7yZJD97YkBc",
  authDomain: "chat-dac63.firebaseapp.com",
  projectId: "chat-dac63",
  storageBucket: "chat-dac63.appspot.com",
  messagingSenderId: "64803634540",
  appId: "1:64803634540:web:72cc823b34255dd9678749"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()