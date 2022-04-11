import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCSs80iIey2tDlDiTao-RtxwNv6XpRrbeU",
  authDomain: "clothing-db-84041.firebaseapp.com",
  projectId: "clothing-db-84041",
  storageBucket: "clothing-db-84041.appspot.com",
  messagingSenderId: "117071833851",
  appId: "1:117071833851:web:4f930935f7e0fa2c4e5e5e"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
