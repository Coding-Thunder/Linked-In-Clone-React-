import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDE3YnNH9C5zbUX4Id8JMBhHRso4En-dyU",
  authDomain: "linkedincloneportfolio.firebaseapp.com",
  projectId: "linkedincloneportfolio",
  storageBucket: "linkedincloneportfolio.appspot.com",
  messagingSenderId: "52394238153",
  appId: "1:52394238153:web:51355fc14a0cd495a36d18",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
