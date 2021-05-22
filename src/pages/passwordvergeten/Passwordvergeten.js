import React from 'react';
import '../../App.css';
import ForgotPassword from "../../components/forgotpassword/ForgotPassword";


function Passwordvergeten() {
    console.log("je bent nu op ");
    return (
        <>
            <h3>Reset Password</h3>
            <div>
                <ForgotPassword/>
            </div>
        </>
    );
}
export default Passwordvergeten;