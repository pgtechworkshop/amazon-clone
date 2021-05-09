import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA8lf8JhNdRdJ4_uTOvxQ44KAj6VS4uoHA",
    authDomain: "amzclone-bea08.firebaseapp.com",
    projectId: "amzclone-bea08",
    storageBucket: "amzclone-bea08.appspot.com",
    messagingSenderId: "292401949679",
    appId: "1:292401949679:web:203bbd7b9f2caefa13641a",
    measurementId: "G-GXPC8C7JNR"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
