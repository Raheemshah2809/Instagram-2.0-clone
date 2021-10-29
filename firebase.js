// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAY_Nz57-XebVxLgxGCuMzLIUp5NkBENA",
  authDomain: "instagram-project-18741.firebaseapp.com",
  projectId: "instagram-project-18741",
  storageBucket: "instagram-project-18741.appspot.com",
  messagingSenderId: "1058752459296",
  appId: "1:1058752459296:web:23f81a8ce942d9cd524245",
  measurementId: "G-M7CX6Z75PK"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig): getApp();
const db = getFirestore();
const storage = getStorage();

export {app,db,storage};