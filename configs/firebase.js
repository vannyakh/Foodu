// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth ,connectAuthEmulator } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALIKR8iLUI0QotQCQNvZ7UAtaL1fygsPw",
  authDomain: "foodu-230ac.firebaseapp.com",
  projectId: "foodu-230ac",
  storageBucket: "foodu-230ac.appspot.com",
  messagingSenderId: "915244077382",
  appId: "1:915244077382:web:ac45c03cd37bbe73dc9547"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const authg = getAuth();
// connectAuthEmulator(authg, 'http://localhost:19000');

export const auth = getAuth(app);