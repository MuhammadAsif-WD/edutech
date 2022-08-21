import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXwYlDfHYOaJgI_6YHiJNlN1uFALjcNSc",
  authDomain: "edutech-asif.firebaseapp.com",
  projectId: "edutech-asif",
  storageBucket: "edutech-asif.appspot.com",
  messagingSenderId: "754463373460",
  appId: "1:754463373460:web:43e2480728637fce0f9c81",
  measurementId: "G-TPYX9H6D1K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
