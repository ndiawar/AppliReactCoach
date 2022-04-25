import "../Firebase/firebase";

import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    } from "firebase/firestore";

    const bookCollectionRef = collection(this.db, "books");
    
    class BookDataService {
    addBooks = (newBook) => {
        return addDoc(bookCollectionRef, newBook);
    };

    updateBook = (id, updatedBook) => {
        const bookDoc = doc(this.db, "books", id);
        return updateDoc(bookDoc, updatedBook);
    };

    deleteBook = (id) => {
        const bookDoc = doc(this.db, "books", id);
        return deleteDoc(bookDoc);
    };

    getAllBooks = () => {
        return getDocs(bookCollectionRef);
    };

    getBook = (id) => {
        const bookDoc = doc(this.db, "books", id);
        return getDoc(bookDoc);
    };
}

export default new BookDataService();