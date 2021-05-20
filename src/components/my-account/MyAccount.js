import React from 'react';
import '../../App.css';
import {NavLink} from "react-router-dom";



function MyAccount(currentUser) {

    console.log("je bent in my account");
    return (
        <>
           <div id="parkingAdam-form-deel" >
             <br/><br/>
             <label id="parkinglocation-form">
                 <h2>Gegevens USER</h2>
                <h2>Email</h2>
                {currentUser.email}
             </label><br/><br/>
             <NavLink to="/"> |> Home</NavLink><br/>
           </div>
        </>
    );
}
export default MyAccount;
