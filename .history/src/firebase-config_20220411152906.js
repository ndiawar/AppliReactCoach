import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAXLSYuUe1F-JP8qbBYu9pKseaFu6v8s9M",
    authDomain: "connect-auth2.firebaseapp.com",
    projectId: "connect-auth2",
    storageBucket: "connect-auth2.appspot.com",
    messagingSenderId: "85566028607",
    appId: "1:85566028607:web:b050d4bf2b22c188c2f18a",
    measurementId: "G-9H19T6XSY4"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);