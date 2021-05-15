import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase'
export const AuthContext = createContext ({});

function AuthContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const history = useHistory();

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
        currentUser
        signup
    }
    async function fetchUserData() {
        try {
            const result = await axios.get( {
                headers: {
                    //"Content-Type": "application/json",
                    //Authorization: "Bearer xxx.xxx.xxx",
                }
            })
            console.log(result, "heb ik contact?");
            setCurrentUser({
                user: {
                    username: result.data.username,
                    email: result.data.email,
                    password: result.data.password,
                    role: result.data.user,
                    id: result.data.id,
                },
                admin: {
                    username: result.data.username,
                    email: result.data.email,
                    password: result.data.password,
                    role: result.data.admin,
                    id: result.data.id,
                },
                status: "done",
            });

        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token !== null && authState.user === null) {
            fetchUserData(token);
        } else {
            setAuthState({user: null, status: "done",});
        }
    }, [authState.user])

    async function loginFunction(jwtToken) {
        localStorage.setItem('token', 'jwtToken');

        fetchUserData()
        {//*jwtToken*//});//hier komt token
            history.push('/account');
        }

        function logoutFunction() {
            console.log("logout");
            localStorage.clear();
            history.push('/')
        }

        const data = {
            ...authState,
            login: loginFunction,
            logout: logoutFunction,
            //console.log(data);
        };

        return (
            <AuthContext.Provider value={data}>
                {authState.status === "done" ? children : <p>Loading...</p>}
            </AuthContext.Provider>
        )
    }
}
export default AuthContextProvider;

//console.log(jwtToken, "jwt token");
//const decoded = jwt_decode(jwtToken)
//const userId = decoded.sub
//console.log(userId);
//console.log('decode jwt:', decoded);
//localStorage.setItem("token", jwtToken)