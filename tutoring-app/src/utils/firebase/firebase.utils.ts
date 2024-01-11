import { initializeApp } from 'firebase/app';//creates an app instance based config
import {
    getAuth,
    signInWithRedirect,
    GoogleAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    User,
    NextOrObserver
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    QueryDocumentSnapshot
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

export type additionalInformation = {
    displayName ?: string;
}

export type UserData = {
    createdAtDate: Date;
    displayName: string;
    email: string;
}

export const createUserDocumentFromAuth = async (
    userAuth: User,
    additionalInformation = {} as additionalInformation
) : Promise<void | QueryDocumentSnapshot<UserData>> => {
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
            console.log(`error creating the user`, error);
        }
    }
   
    return userSnapShot as QueryDocumentSnapshot<UserData>;

}

export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email: string, password: string) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) => onAuthStateChanged(auth, callback);