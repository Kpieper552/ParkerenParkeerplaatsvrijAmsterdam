import React from 'react';
import '../../App.css';
import MyAccount from "../../components/my-account/MyAccount";



function Account() {

    console.log("je bent nu op de accountpagina");
    return (
        <>
            <h3>Account</h3>
                <div>
                    <MyAccount/>
                </div>
        </>
    );
}
export default Account;
