import React, {useState} from 'react';
import '../../App.css';
import { useAuth } from '../../context/SignupContext';
import { useHistory} from 'react-router-dom';

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
                 <div id="parkingAdam-form-deel" >
                <br/><br/>
                <label id="parkinglocationdetails-form">
                    <h2>Welkom op MyAccount</h2>
                    <h3>|Gebruiker <br/>
                        |> Email: {currentUser && currentUser.email}</h3>
                    <h4>Met uw account heeft u toegang tot</h4>
                    <h3>Parkeergarages Locaties Detail Gegevens </h3>
                    <h3>Parkeerplaatsen VRIJ Langparkeren</h3>
                    <h5>Vergunningshoudersregeling Gemeente Amsterdam</h5>

                </label>
                     <br/><br/>
                <button onClick={handleLogout} type="link" id="parkinglocationdetails-form"> |> Logout</button><br/><br/>
                </div><br/><br/>
             </>
    );
}
export default MyAccount;
