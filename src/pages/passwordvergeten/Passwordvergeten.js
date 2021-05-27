import React from 'react';
import '../../App.css';
import ForgotPassword from "../../components/forgotpassword/ForgotPassword";


function Passwordvergeten() {
    return (
        <>
            <h3>Reset Password</h3>
            <div>
                <div id="parkingAdam-content-deel">
                    <h4>Reset Password: Na het invullen van uw geregistreerde email, ontvangt u een email met link om het password aan te passen. </h4>
                <ForgotPassword/>
                </div>
            </div>
        </>
    );
}
export default Passwordvergeten;