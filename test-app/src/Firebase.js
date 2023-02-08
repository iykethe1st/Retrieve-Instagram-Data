// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBT_et2L50_UzceJSDLLH6ksmBSiMv2lBg",
  authDomain: "instagramtest-b76de.firebaseapp.com",
  projectId: "instagramtest-b76de",
  storageBucket: "instagramtest-b76de.appspot.com",
  messagingSenderId: "566231799145",
  appId: "1:566231799145:web:a51b2abe5b8f1f450f99f8",
  measurementId: "G-JRK8PDPMWM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
