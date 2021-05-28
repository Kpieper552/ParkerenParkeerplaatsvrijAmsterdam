import React, {useState} from 'react';
import '../../App.css';
import { useAuth } from '../../context/SignupContext';
import { useHistory } from 'react-router-dom';

function MyAccount() {
    const [error, setError] = useState("")
    const { logout, currentUser } = useAuth()
    const history = useHistory();

    async function handleLogout() {
        setError("")
        try {
            await logout()
            console.log(logout, "je bent uitgelogd van my account");
            history.push("/login")
            //localStorage.clear()
        } catch {
            setError("failed to logout")
        }
        console.log("ik ben uitgelogd")
    }
    return (
            <>
                {error && (error) }
                <br/><br/>
                 <div id="parkingAdam-form-deel">
                <br/><br/>
                 <div id="parkingAdam-content-deel">
                     <h4>Welkom op My Account </h4>
                     <h3>{currentUser && currentUser.email}</h3>
                     <div id="parkingAdam-content-deel">
                         <h4>Met uw account heeft u toegang tot:</h4>
                         <h3>Parkeergarages Locaties Detail Gegevens </h3>
                         <h3>Parkeerplaatsen VRIJ Langparkeren</h3>
                      </div>
                 </div>
                     <br/><br/>
                <label id="parkinglocationdetails-form">
                    <h2>Account</h2>
                    <h4>|Gebruiker <br/>
                    |> Email:</h4>
                    <h3>{currentUser && currentUser.email}</h3>
                </label>
                     <br/><br/>
                <button onClick={handleLogout} type="link" id="parkinglocationdetails-form"> |> Logout</button><br/><br/>
                     <br/><br/>
                </div>
             </>
    );
}
export default MyAccount;
