import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAHM6tEf8ihX4U_Omku7zXMM38z_XY1Uyc",
  authDomain: "clone-91445.firebaseapp.com",
  projectId: "clone-91445",
  storageBucket: "clone-91445.appspot.com",
  messagingSenderId: "729161808644",
  appId: "1:729161808644:web:0d6493e5852b5848332e51",
  measurementId: "G-T66H7M7CR9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;