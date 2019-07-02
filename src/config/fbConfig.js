import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Replace this with your own config details
const config = {
  apiKey: "AIzaSyA0CW8SXVIjnbBa2q0oi2X_YvqbxFIT8o4",
  authDomain: "react-redux-firebase-c16dc.firebaseapp.com",
  databaseURL: "https://react-redux-firebase-c16dc.firebaseio.com",
  projectId: "react-redux-firebase-c16dc",
  storageBucket: "",
  messagingSenderId: "640768633523",
  appId: "1:640768633523:web:1c0950f9dde8657e"
};
const fbConfig = firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default fbConfig;
