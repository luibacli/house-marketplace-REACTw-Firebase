// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCg_F-Z2BJOa1luuGzB-Czpx7HAH62Sf28",
    authDomain: "house-marketplace-1c0e0.firebaseapp.com",
    projectId: "house-marketplace-1c0e0",
    storageBucket: "house-marketplace-1c0e0.appspot.com",
    messagingSenderId: "994685804838",
    appId: "1:994685804838:web:06b9d58981ccc9e0cee1e7",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
