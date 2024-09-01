// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB-IPhjo8cTrIHH4q1eg-79dmsDuOVon2M",
    authDomain: "travalog-ffe26.firebaseapp.com",
    projectId: "travalog-ffe26",
    storageBucket: "travalog-ffe26.appspot.com",
    messagingSenderId: "631679662230",
    appId: "1:631679662230:web:b7be34bc2bccc15316aab7",
    measurementId: "G-P42N68H49T"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => signInWithPopup(auth, provider);
const logOut = () => signOut(auth);
const db=getFirestore(app);

export { auth, signInWithGoogle, logOut,db };
