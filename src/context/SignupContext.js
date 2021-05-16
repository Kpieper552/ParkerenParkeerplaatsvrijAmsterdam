import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase'

const AuthContext = React.createContext ()

export function useAuth() {
    return useContext(AuthContext)
}
export function AuthProvider ({ childern }) {
    const [currentUser, setCurrentUser] = useState()

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
        return unsubscribe

    }, [])


    const value = {
        currentUser,
        signup
    }


    return (
        <AuthContext.Provider value={value}>
            { childern }
        </AuthContext.Provider>
    );
}
export default AuthProvider;
