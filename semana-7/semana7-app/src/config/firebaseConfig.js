
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBVuyTkIV1LV3eXCpkdEkYG8sltOGO5JYs",
  authDomain: "test-coder-accf9.firebaseapp.com",
  projectId: "test-coder-accf9",
  storageBucket: "test-coder-accf9.appspot.com",
  messagingSenderId: "615120883153",
  appId: "1:615120883153:web:30b5f6cb515ce5f1ad64f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Referencia a la base de datos
export const db = getFirestore(app);