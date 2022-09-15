
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDahnjj84WcOLkBhdFLPu0bFmL3EvieE9g",
  authDomain: "chatbase-81129.firebaseapp.com",
  projectId: "chatbase-81129",
  storageBucket: "chatbase-81129.appspot.com",
  messagingSenderId: "320652792647",
  appId: "1:320652792647:web:86f0fdf1a0781eb42a7262"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();