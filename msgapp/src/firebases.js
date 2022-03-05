import firebase from "firebase";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBmlV5TKoum9cOzy25_lsIB5RI1gLGcZWo",
  authDomain: "msgapp-b21f1.firebaseapp.com",
  projectId: "msgapp-b21f1",
  storageBucket: "msgapp-b21f1.appspot.com",
  messagingSenderId: "627345663932",
  appId: "1:627345663932:web:e9e14b316d4667abf02db9",
  measurementId: "G-RHGF1VGB6Y",
});
const database = app.firestore();
const auth = app.auth();

export { database, auth };
