// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC13_JckEu4Jvxvr-6KaEPEJRhjWqji2BE",
  authDomain: "git-hub-queries.firebaseapp.com",
  projectId: "git-hub-queries",
  storageBucket: "git-hub-queries.appspot.com",
  messagingSenderId: "764863682443",
  appId: "1:764863682443:web:a1ee96847bdfc58f02018e",
  measurementId: "G-B3PWFZCW36",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics };
