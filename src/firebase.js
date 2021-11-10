import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDSXyvIA1-9_ACmMnXvVY7Cj3dSf5hXPFE",
    authDomain: "disney-plus-clone-107f1.firebaseapp.com",
    projectId: "disney-plus-clone-107f1",
    storageBucket: "disney-plus-clone-107f1.appspot.com",
    messagingSenderId: "196890126020",
    appId: "1:196890126020:web:2bf19c35301beed9658b91"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};