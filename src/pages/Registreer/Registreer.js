import React from 'react';
import '../../App.css';
import SignUp from "../../components/sign-up/SignUp";



function Registreer() {

    console.log("je bent nu op de registreerpagina");
    return (
        <>
        <h1>Registreer</h1>
        <div>
            <SignUp/>
        </div>
        </>

    );
}
export default Registreer;