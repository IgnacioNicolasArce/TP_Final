import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQipV5koWfS-5uc5B6kcyMxi0WLDaruKE",
  authDomain: "prueba-firebase-f45fc.firebaseapp.com",
  projectId: "prueba-firebase-f45fc",
  storageBucket: "prueba-firebase-f45fc.firebasestorage.app",
  messagingSenderId: "1083742527881",
  appId: "1:1083742527881:web:541e51441e059105a2c158"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app; 