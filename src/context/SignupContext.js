import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase'

const AuthContext = React.createContext ()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider ({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email, password) {
        console.log(email, password, "wat is dit")
        return auth.createUserWithEmailAndPassword(email, password)

    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)

    }
    function logout() {
        console.log(logout, "wat is logout")
        return auth.signOut()
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe

    }, [])


    const value = {
        currentUser,
        logout,
        signup,
        login,
    }


    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
export default AuthProvider;
