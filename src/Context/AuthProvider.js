import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // to prevent the redirect to the login page after reloading 

    // Why do we set the loading state to true in other functions?
    /*
    setting the loading state to true in functions like user account creation and user login functions
    is crucial for providing a consistent, informative, and responsive user experience 
    while handling potential errors and ensuring a smooth user flow.
    */

    // to create account of the user 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // to log in the user 
    const userLogIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // to get current user 
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log("Current User:", currentUser);
            setLoading(false);
        });

        return () => unsubscribe();

    }, []);

    // to logout the user 
    const userLogOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    // to update user profile/ to set user name 
    const userProfileUpdate = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    };

    const authInfo = {
        loading,
        user,
        createUser,
        userLogIn,
        userLogOut,
        userProfileUpdate,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;