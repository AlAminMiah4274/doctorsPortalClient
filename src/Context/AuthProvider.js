import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    // to create account of the user 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // to log in the user 
    const userLogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // to get current user 
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log("Current User:", currentUser);
        });

        return () => unsubscribe();

    }, []);

    // to logout the user 
    const userLogOut = () => {
        return signOut(auth);
    };

    // to update user profile/ to set user name 
    const userProfileUpdate = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    };

    const authInfo = {
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