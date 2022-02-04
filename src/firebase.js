import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBFNg-3ClDfgKtH4d_lBKybkYQ8AlibMWA",
    authDomain: "chkout-10f95.firebaseapp.com",
    projectId: "chkout-10f95",
    storageBucket: "chkout-10f95.appspot.com",
    messagingSenderId: "864196263729",
    appId: "1:864196263729:web:88c5aef4e341deac39ba10",
    measurementId: "G-ZBYY1VHKK9"
  }

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };