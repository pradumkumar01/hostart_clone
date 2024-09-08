// import firebase from "./firebase";
import firebase from "firebase/compat/app"
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// Your web app's Firebase configuration




const firebaseConfig = {
  apiKey: "AIzaSyC6FnMfeockCRCbT8TM0vFGedmq8LVRC1s",
  authDomain: "hotstar-clone-d9717.firebaseapp.com",
  projectId: "hotstar-clone-d9717",
  storageBucket: "hotstar-clone-d9717.appspot.com",
  messagingSenderId: "836784078312",
  appId: "1:836784078312:web:07493e20ad3829f1c6b85d",
  measurementId: "G-HGH5RL9ZK8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;