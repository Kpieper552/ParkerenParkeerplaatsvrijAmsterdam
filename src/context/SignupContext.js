import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
//import jwt_decode from 'jwt-decode';
import { useHistory } from 'react-router-dom';

export const SignupContext = createContext ({});

function SignupContextProvider({ children }) {
    const history = useHistory();
    const [authState, setAuthState] = useState({user: null, status: "pending", })

    async function fetchUserData(jwtToken) {
        //console.log(jwtToken, "jwt token");
        //const decoded = jwt_decode(jwtToken)
        //const userId = decoded.sub
        //console.log(userId);
        //console.log('decode jwt:', decoded);
        //localStorage.setItem("token", jwtToken)

        try {
            const result = await axios.get({//*`http://localhost:3000/600/users/${userId}`//*}, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwtToken}`,
                }
            })
            console.log(result);
            setAuthState({
                user: {
                    username: result.data.username,
                    email: result.data.email,
                    id: result.data.id,
                },
                status: "done",
            });

        } catch (e)  {
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

        fetchUserData(jwtToken);
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
        <SignupContext.Provider value={data}>
            {authState.status === "done" ? children : <p>Loading...</p>}
        </SignupContext.Provider>
    )
}

export default SignupContextProvider;
