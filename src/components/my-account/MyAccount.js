import React, {useState} from 'react';
import '../../App.css';

import { useAuth } from '../../context/SignupContext';
import { useHistory} from 'react-router-dom';

function MyAccount() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory();

    async function handleLogout() {
        setError("")
        try {
            await logout()
            console.log(logout, "je bent uitgelogd van my account");
            history.push("/login")
        } catch {
            setError("failed to logout")
        }
        console.log("ik ben uitgelogd")
    }
    console.log(currentUser.email, "je bent ingelogd")

    return (
            <>
                {error && (error) }
                 <div id="parkingAdam-form-deel" >
                <br/><br/>
                <label id="parkinglocationdetails-form">
                    <h2>Welkom  </h2><h2>MY ACCOUNT</h2><h3>| Login email |> {currentUser.email}</h3>

                     </label>
                     <br/><br/>

                <button onClick={handleLogout} type="link" id="parkinglocationdetails-form"> |> Logout</button><br/><br/>
                </div><br/><br/>
             </>
    );
}
export default MyAccount;
//{currentUser.email}