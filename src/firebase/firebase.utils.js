import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBzmcpMNWRTaJBAj00bFQZ1BD_2i8OIyHs",
    authDomain: "e-commerce-eb426.firebaseapp.com",
    projectId: "e-commerce-eb426",
    storageBucket: "e-commerce-eb426.appspot.com",
    messagingSenderId: "226863318124",
    appId: "1:226863318124:web:fa882599566a1bd5bcc449",
    measurementId: "G-7SFDQRSVLM"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`/users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

// if need to load multiple apps, check app names
if (!firebase.apps.length) { firebase.initializeApp(config); }

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;