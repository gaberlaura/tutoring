import { initializeApp } from 'firebase/app';//creates an app instance based config
import {
    getAuth,
    signInWithRedirect,
    GoogleAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

// web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyALOh4v3-xEwo3jKZeJFWtVoerJXo-CP88",
    authDomain: "tutoring-db.firebaseapp.com",
    projectId: "tutoring-db",
    storageBucket: "tutoring-db.appspot.com",
    messagingSenderId: "446018699337",
    appId: "1:446018699337:web:faf391ec2134146688bf98"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

//For Google authentication
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapShot = await getDoc(userDocRef);

    //if user data does not exist...
    if (!userSnapShot.exists()) {
        //create / set the document with the data from userAuth in my collection
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (error) {
            console.log(`error creating the user`, error.message);
        }
    }
    //if user data exists, return userDocRef
    return userDocRef;

}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);