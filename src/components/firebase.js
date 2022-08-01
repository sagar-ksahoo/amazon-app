import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyDeWO0hIUfj3ygjpDCYcopbulsV8CUCAVQ",
    authDomain: "app-38669.firebaseapp.com",
    projectId: "app-38669",
    storageBucket: "app-38669.appspot.com",
    messagingSenderId: "585032471875",
    appId: "1:585032471875:web:9965023a18f78f09b54bf6",
    measurementId: "G-QLH62JLWGF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig) ;

const db = firebaseApp.firestore();
const auth = firebase.auth() ;

export {db, auth};

