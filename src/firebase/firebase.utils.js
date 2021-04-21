import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyCXk0ULBT8utlLuVDdOoe4E5R2WQbCfHLs",
        authDomain: "gaming-store-e7fcc.firebaseapp.com",
        projectId: "gaming-store-e7fcc",
        storageBucket: "gaming-store-e7fcc.appspot.com",
        messagingSenderId: "595525362929",
        appId: "1:595525362929:web:6c623e1a7d6fa316b1b550"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;