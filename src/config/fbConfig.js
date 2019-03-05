import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Replace this with your own config details
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDsaQ3RH8TvtQo6M37kzrhHbtO14ARIVOM",
  authDomain: "ooomedi.firebaseapp.com",
  databaseURL: "https://ooomedi.firebaseio.com",
  projectId: "ooomedi",
  storageBucket: "ooomedi.appspot.com",
  messagingSenderId: "348754699208"
};
firebase.initializeApp(config);
firebase.firestore().settings({});

export default firebase;
