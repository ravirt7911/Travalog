// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: "travalog-d5ff1",
  storageBucket: "travalog-d5ff1.appspot.com",
  messagingSenderId: "432086887021",
  appId: "1:432086887021:web:eb908dddb01cb6f6646d64"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => signInWithPopup(auth, provider);
const logOut = () => signOut(auth);
const db=getFirestore(app);

export { auth, signInWithGoogle, logOut,db };
