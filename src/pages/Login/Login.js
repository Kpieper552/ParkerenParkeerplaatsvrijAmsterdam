import React from 'react';
import '../../App.css';
import SignIn from "../../components/sign-in/SignIn";


function Login() {

    return (
        <>
            <h3>Login</h3>
            <div>
                <div id="parkingAdam-content-deel">
                    <h4>Login om toegang te krijgen tot MyAccount</h4>
                <SignIn/>
                </div>
            </div>
        </>
    );
}
export default Login;