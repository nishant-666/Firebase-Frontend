import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
    //Your Own
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);