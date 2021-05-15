import React from 'react';
import '../../App.css';
import Tile from "../../components/tile/Tile";
import amsterdam from "../../assets/amsterdam.JPG.png";
import {NavLink} from "react-router-dom";
//import {Link} from "react-router-dom";
//import React, { useContext } from 'react';
//import { SignupContext } from "../context/SignupContext";

//PAGINA PROFILE OVERGENOMEN UIT PRACTICE PROJECT
function Account() {
    //const { user } = useContext(SignupContext)
    console.log("je bent nu op de accountpagina");
    return (
        <>
            <Tile img={amsterdam} imgDescription={amsterdam}/>
            <h1>Account</h1>
            <section>
               <div id="parkingAdam-weg-deel" >
                   <h2>Gegevens USER</h2>
                   <label id="parkinglocation">
                       <h2>Email</h2>

                   </label>
                   <br/>
                   <br/>
                   <label id="parkinglocation">
                       <h2>Password</h2>

                   </label>
                   <br/>
                   <label id="parkinglocation">
                       <h2>Password</h2>

                   </label>
                   <NavLink to="/"> |> Home</NavLink><br/>
               </div>
            </section>
        </>
    );
}
export default Account;
//                    <p>Gebruikersnaam: {user && user.username}</p>
//                     /<p>Email: {user && user.user.email}</p>
//                     <Link to="/">Terug naar Home</Link>