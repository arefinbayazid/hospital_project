import React, { useEffect, useState } from 'react';
import firebaseInit from '../../Firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

firebaseInit()
const useFirebase = () => {
    const auth = getAuth();

    // google sign in handelar
    const [userInfo, setUserInfo] = useState(null);
    const googleProvider = new GoogleAuthProvider();   
    const signInWithGoogleHandelar = () =>{
        return signInWithPopup(auth, googleProvider)        
    }

    // update profile name
    const updateProfileName = name =>{
        updateProfile(auth.currentUser, {
            displayName: name
        })
        .then(() => {

        })
          
    }
    
    // sing up new user handelar
    const singUpNewUserHandelar = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // log in handelar 
    const signInHandelar = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // firebase sate handeler 
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, (userInfo) => {
            if (userInfo) {
                setUserInfo(userInfo)
            }
        });

        return () => unsubscribed;
    }, [])

    // sign out handel
    const singOutHandelar = () =>{
        signOut(auth)
        .then(() => {
            // Sign-out successful.
        })
        window.location.reload();
    }
    return{
        userInfo,
        updateProfileName,
        signInWithGoogleHandelar,
        singOutHandelar,
        singUpNewUserHandelar,
        signInHandelar,
    }
};

export default useFirebase;