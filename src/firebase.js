import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDs5bwr92dUuhx10IwU6AUazKk_iNSco6w",
  authDomain: "tinder-sneaker-project.firebaseapp.com",
  projectId: "tinder-sneaker-project",
  storageBucket: "tinder-sneaker-project.appspot.com",
  messagingSenderId: "1065065085448",
  appId: "1:1065065085448:web:395a050e6f7f9442ec6fbd",
  measurementId: "G-FWBZFET51S"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
