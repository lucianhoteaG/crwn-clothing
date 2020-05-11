import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB5ihntGQNte0FRD_Q2WR3WqgZCo1kQwCs",
  authDomain: "crown-78563.firebaseapp.com",
  databaseURL: "https://crown-78563.firebaseio.com",
  projectId: "crown-78563",
  storageBucket: "crown-78563.appspot.com",
  messagingSenderId: "21135238445",
  appId: "1:21135238445:web:ad024139b4e16db8099fa4",
  measurementId: "G-QJFWBQ41BX"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exist) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating message', error.message);      
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

