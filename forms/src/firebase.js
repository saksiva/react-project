import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyBl5li4Bq50PbdsWF0E2x5vIJtViaa6GvY",
  authDomain: "forms-test-aafab.firebaseapp.com",
  databaseURL: "https://forms-test-aafab.firebaseio.com",
  projectId: "forms-test-aafab",
  storageBucket: "forms-test-aafab.appspot.com",
  messagingSenderId: "588367393753"
};
firebase.initializeApp(config);

const firebaseDB = firebase.database();
const googleAuth = new firebase.auth.GoogleAuthProvider();

export { firebase, firebaseDB, googleAuth };
