import React from 'react';
import './Login.css';
import SignIn from "../../components/sign-in/SignIn";



function Login() {

    return (
        <>
            <h3>Login</h3>
            <div>
                <div id="parkingAdam-container-authentication">
                    <h4>Login met uw account om toegang te krijgen tot lang parkeren en locatie gegevens uitgebreid.
                    Login met uw email en password.</h4>
                <SignIn/>
                </div>
            </div>
        </>
    );
}
export default Login;