import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../FireBase/FireBase.confing';




export const AuthContext = createContext()
const auth = getAuth(app)


const AuthProvider = ({ children }) => {

    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }
const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email,password)
}

const singIn = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password);
}

const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
}

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    
    const [user, setUser]  = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('inside auth state change', currentUser);
            setUser(currentUser)
        });

        return () => {
            unsubscribe();
        }

    }, [])


    const authInfo = { 
        user 
        ,providerLogin,
        logOut,createUser,
        singIn,updateUserProfile,
        loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;