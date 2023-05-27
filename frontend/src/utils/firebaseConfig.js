// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-z0kRXpv_Yg7f5qsZ0kj_2bJ8X7pMdjQ",
  authDomain: "paf-project-2df19.firebaseapp.com",
  projectId: "paf-project-2df19",
  storageBucket: "paf-project-2df19.appspot.com",
  messagingSenderId: "1073022405468",
  appId: "1:1073022405468:web:2108d90b8b69c866d50f99",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
