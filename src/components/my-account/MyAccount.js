import React, {useState} from 'react';
import '../my-account/MyAccount.css';
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
            history.push("/login")
        } catch {
            setError("failed to logout")
        }
    }
    return (
            <>
                {error && (error) }
                <br/><br/>
                 <div id="parkingAdam-content-container">
                <br/><br/>
                 <div id="parkingAdam-content-box">
                     <h4>Welkom op My Account van:</h4>
                     <h3>{currentUser && currentUser.email}</h3>
                     <div id="parkingAdam-content-box">
                         <h4>Met uw account heeft u toegang tot:</h4>
                         <h3>Parkeerlocatie's gegevens uitgebreid </h3>
                         <h3>Parkeerplaatsen VRIJ Langparkeren</h3>
                      </div>
                 </div>
                     <br/><br/>
                <label id="parkingAdam-account-box">
                    <h2>Account</h2>
                    <h4>|Gebruiker <br/>
                    |> Email:</h4>
                    <h3>{currentUser && currentUser.email}</h3>
                </label>
                     <br/><br/>
                <button onClick={handleLogout} type="link" id="parkingAdam-account-box"> |> Logout</button><br/><br/>
                     <br/><br/>
                </div>
             </>
    );
}
export default MyAccount;
