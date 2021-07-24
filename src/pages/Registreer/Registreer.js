import React from 'react';
import './Registreer.css';
import SignUp from "../../components/sign-up/SignUp";



function Registreer() {
    return (
        <>
        <h3>Registreer</h3>
        <div>
            <div id="parkingAdam-container-authentication">
                <h4>Registreer voor toegang MyAccount </h4>
                <SignUp/>
            </div>
        </div>
        </>

    );
}
export default Registreer;