import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAiKHwgWGBbQTfWnajB5tJL0JX1MWcyJXQ",
  authDomain: "cloneamaz.firebaseapp.com",
  databaseURL: "https://cloneamaz.firebaseio.com",
  projectId: "cloneamaz",
  storageBucket: "cloneamaz.appspot.com",
  messagingSenderId: "510615780809",
  appId: "1:510615780809:web:55b2532af5712b37e0bc18",
  measurementId: "G-FPLF3W2CKX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
