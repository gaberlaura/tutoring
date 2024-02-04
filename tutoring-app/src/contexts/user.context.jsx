/*
    This code sets up a React context and provider to manage user authentication state using Firebase. 
    It initializes a context (UserContext) with a default state, defines an action type for updating the current user, 
    and creates a reducer to handle state updates. 
    The UserProvider component utilizes the reducer and context to manage the current user state based on Firebase authentication events. 
    It also includes an effect that subscribes to authentication state changes, calling a Firebase utility function (createUserDocumentFromAuth) when a user is logged in and updating the state accordingly. 
    Components wrapped in the UserProvider have access to the current user state and a function (setCurrentUser) to update it.    
*/

import { createContext, useState, useEffect, useReducer } from 'react';
import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
});

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state, action) => {
    console.log('dispatched');
    console.log(action);
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            throw new Error(`unhandled type ${type} in userReducer`)
    }
}

export const UserProvider = ({ children }) => {
    const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

    const setCurrentUser = (user) => {
        dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
    }

    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}