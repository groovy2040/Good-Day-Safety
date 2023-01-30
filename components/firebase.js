import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

export const firebaseConfig = {
  apiKey: "AIzaSyDolaeTOdRJV7MBRYbSt6mECwjX_BuRHrE",
  authDomain: "good-day-app-5be12.firebaseapp.com",
  projectId: "good-day-app-5be12",
  storageBucket: "good-day-app-5be12.appspot.com",
  messagingSenderId: "926461189493",
  appId: "1:926461189493:web:493fb7c03618b239af073c",
  measurementId: "G-49MRTKXD4K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
//const analytics = getAnalytics();

export { auth, db };
