import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyDVHfKBUoux4ap512AwyCupXqDz_iGNsPI",
  authDomain: "brillolim-web-admin.firebaseapp.com",
  databaseURL: "https://brillolim-web-admin.firebaseio.com",
  projectId: "brillolim-web-admin",
  storageBucket: "brillolim-web-admin.appspot.com",
  messagingSenderId: "307399400443"
};
firebase.initializeApp(config);
firebase.firestore().settings({});

export default firebase;
