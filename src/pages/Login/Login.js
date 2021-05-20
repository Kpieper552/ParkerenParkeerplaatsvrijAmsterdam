import React from 'react';
import '../../App.css';
import SignIn from "../../components/sign-in/SignIn";


function Login() {
    console.log("je bent nu op de loginpagina");
    return (
        <>
            <h1>Login</h1>
            <div>
                <SignIn/>
            </div>
        </>
    );
}
export default Login;