// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-AtwBCNIxFnP1othBQwiyLL9nGTMlOtg",
  authDomain: "to-do-list-6e443.firebaseapp.com",
  projectId: "to-do-list-6e443",
  storageBucket: "to-do-list-6e443.appspot.com",
  messagingSenderId: "434201982592",
  appId: "1:434201982592:web:c951315778baf8d2395865",
  measurementId: "G-S558Z4QYCZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);