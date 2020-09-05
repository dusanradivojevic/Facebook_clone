import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAL7Ah0ztO2UAC8GeAGCgTV9IcTJFsb8LE",
  authDomain: "facebook-clone-9b8ea.firebaseapp.com",
  databaseURL: "https://facebook-clone-9b8ea.firebaseio.com",
  projectId: "facebook-clone-9b8ea",
  storageBucket: "facebook-clone-9b8ea.appspot.com",
  messagingSenderId: "290570232113",
  appId: "1:290570232113:web:fdd3599490aa8ae7351010",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
