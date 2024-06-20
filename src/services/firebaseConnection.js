import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
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
const auth = getAuth(app);
export { analytics, auth };
