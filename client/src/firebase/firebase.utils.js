import * as firebase from 'firebase/app';

require('firebase/auth');
require('firebase/firestore');

const config = {
  apiKey: 'AIzaSyAJlU4bXG3KhA7U3IZIBoRWlg7gWLV2Vhs',
  authDomain: 'react-app-db-48fa5.firebaseapp.com',
  databaseURL: 'https://react-app-db-48fa5.firebaseio.com',
  projectId: 'react-app-db-48fa5',
  storageBucket: 'react-app-db-48fa5.appspot.com',
  messagingSenderId: '973549392876',
  appId: '1:973549392876:web:52c897aff4a46fc178a6c9',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email, uid } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        uid,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      throw new Error(`Error creating user: ${error.message}`);
    }
  }
  return userRef;
};

export const getCurrentUser = () => new Promise((resolve, reject) => {
  const unsubscribe = auth.onAuthStateChanged((userAuth) => {
    unsubscribe();
    resolve(userAuth);
  }, reject);
});

// just to initial load of data to the firestore
export const addCollectionsAndDocs = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((object) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, object);
  });

  return batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollections = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollections.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCollectionSnapshot = async (collection) => {
  try {
    const collectionRef = await firestore.collection(collection);
    return collectionRef.get();
  } catch (error) {
    throw new Error(`Error on getting collections snapshot: ${error.message}`);
  }
};

export const getUserSnapshot = async (userAuth, additionalData) => {
  try {
    const userRef = await createUserProfileDocument(userAuth, additionalData);
    return userRef.get();
  } catch (error) {
    throw new Error(`Error on getting user's snapshot: ${error.message}`);
  }
};

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export default firebase;
