import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJal7jC57aWAb1j_-zDUQnQSPHdwfju2k",
    authDomain: "literary-journal.firebaseapp.com",
    projectId: "literary-journal",
    storageBucket: "literary-journal.appspot.com",
    messagingSenderId: "922340660896",
    appId: "1:922340660896:web:76fbc1e63185cf38289bc5",
};

// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, db, storage, provider, auth };
