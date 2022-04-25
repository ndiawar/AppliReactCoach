import { initializeApp } from "firebase/app";
import { getFirestore, doc } from "firebase/firestore";
import { getAuth ,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail} from 'firebase/auth';

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
        
    
    }
    
    //creer evenement authentification
    
    //Inscription
    signupUser = (email, password) =>
    createUserWithEmailAndPassword(this.auth, email, password);

    //Connection
    loginUser = (email, password) =>
    signInWithEmailAndPassword(this.auth, email, password);

    //Déconnexion
    signoutUser = () => signOut(this.auth);

    //Récupérer le mot de passe
    passwordReset = email => 
    sendPasswordResetEmail(this.auth, email);
    // firestore
    
    //user = uid => this.db.doc(`users/${uid}`);
}
export const user = uid => doc(db, `users/${uid}`);
export const db = getFirestore(initializeApp(config));
export default Firebase;



//const app = initializeApp(firebaseConfig);

//export const auth = getAuth(app);
//
