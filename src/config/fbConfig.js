import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWcm6bwI5DtVKZFqwEF3eaPleaogUGt2M",
  authDomain: "thoughts-11476.firebaseapp.com",
  databaseURL: "https://thoughts-11476.firebaseio.com",
  projectId: "thoughts-11476",
  storageBucket: "thoughts-11476.appspot.com",
  messagingSenderId: "567958056847",
  appId: "1:567958056847:web:bdf0b38c008fb5e1e2a5fa",
  measurementId: "G-CTD526XJHE"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
