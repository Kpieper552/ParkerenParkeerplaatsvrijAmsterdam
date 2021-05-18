import React from 'react';
import '../../App.css';
import MyAccount from "../../components/my-account/MyAccount";



function Account() {

    console.log("je bent nu op de accountpagina");
    return (
        <>
            <h1>Account</h1>
            <div>
              <MyAccount/>
            </div>
        </>
    );
}
export default Account;
