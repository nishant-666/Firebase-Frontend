import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBSIJ_lCvc57-OlK63Qlc5fbfXJThK1E0c",
    authDomain: "next-auth-crud.firebaseapp.com",
    projectId: "next-auth-crud",
    storageBucket: "next-auth-crud.appspot.com",
    messagingSenderId: "802579952904",
    appId: "1:802579952904:web:941b055ae6c3fcd16b28bd"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);