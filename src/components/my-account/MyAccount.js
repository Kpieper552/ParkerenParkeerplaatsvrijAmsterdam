import React, {useState} from 'react';
import '../../App.css';
import { useAuth } from '../../context/SignupContext';
import {Link, useHistory} from 'react-router-dom';

function MyAccount() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory();

    async function handlelogout() {
        setError("")
        try {
            await logout()
            history.push("/login")
        } catch {
            setError("failed to logout")
        }

    }

    console.log("je bent in my account");
    return (
            <>
                {error && (error) }
                 <div id="parkingAdam-form-deel" >
                <br/><br/>
                <label id="parkinglocationdetails-form">
                    <h2>Welkom </h2> <h2>MY ACCOUNT</h2><h3>| Login email |> </h3>
                     </label><br/>
                    <Link to="/update-profile"><button id="parkinglocationdetails-form">Update MyAccount</button></Link>
                  </div>
                <button onClick={handlelogout} type="link" id="parkinglocationdetails-form"> |> Logout</button><br/><br/>
             </>
    );
}
export default MyAccount;
//{currentUser.email}