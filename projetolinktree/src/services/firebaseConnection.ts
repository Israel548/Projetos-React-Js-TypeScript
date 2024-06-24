
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDd3r66aNkpIM7zfvwj1gEptS0IeEB6qF4",
  authDomain: "reactslinks.firebaseapp.com",
  projectId: "reactslinks",
  storageBucket: "reactslinks.appspot.com",
  messagingSenderId: "681217702038",
  appId: "1:681217702038:web:a403756e6bb9a7a7ea2ab7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };