import React from 'react';
import './Passwordvergeten.css';
import ForgotPassword from "../../components/forgotpassword/ForgotPassword";


function Passwordvergeten() {
    return (
        <>
            <h3>Reset Password</h3>
            <div>
                <div id="parkingAdam-container-authentication">
                    <h4>Reset Password: Na het invullen van uw geregistreerde email, ontvangt u een email met link om het password aan te passen.</h4>
                <ForgotPassword/>
                </div>
            </div>
        </>
    );
}
export default Passwordvergeten;