import React from 'react';
import '../../App.css';
import SignIn from "../../components/sign-in/SignIn";


function Login() {
    console.log("je bent nu op de loginpagina");
    return (
        <>
            <h3>Login</h3>
            <div>
                <SignIn/>
            </div>
        </>
    );
}
export default Login;