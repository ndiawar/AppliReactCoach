import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const config = {
    apiKey: "AIzaSyAXLSYuUe1F-JP8qbBYu9pKseaFu6v8s9M",
    authDomain: "connect-auth2.firebaseapp.com",
    projectId: "connect-auth2",
    storageBucket: "connect-auth2.appspot.com",
    messagingSenderId: "85566028607",
    appId: "1:85566028607:web:b050d4bf2b22c188c2f18a",
    measurementId: "G-9H19T6XSY4"
};


class Firebase {
    constructor() {
        const app = initializeApp(config);
        this.auth = getAuth(app);
        this.db = getFirestore(app);
    }

    //creer evenement authentification
    
    //Inscription
    signUser = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    //Connection
    loginUser = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    //Déconnexion
    signOutUser = () => this.auth.signOut();
}

export default Firebase;



//const app = initializeApp(firebaseConfig);

//export const auth = getAuth(app);
//export const db = getFirestore(app);