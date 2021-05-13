import React from 'react';
import '../../App.css';
import Tile from "../../components/tile/Tile";
import kaart from "../../assets/kaart.jpg";
//import {Link} from "react-router-dom";
//import React, { useContext } from 'react';
//import { SignupContext } from "../context/SignupContext";

//PAGINA PROFILE OVERGENOMEN UIT PRACTICE PROJECT
function Account() {
    //const { user } = useContext(SignupContext)
    console.log("je bent nu op de profielpagina");
    return (
        <>
            <Tile img={kaart} imgDescription={kaart}/>
            <h1>ACCOUNT</h1>
            <section>
                <div>
                    <Tile titlearea={"ACCOUNT"}/>
                    <Tile titlearea={"ACCOUNT"}/>
                    <Tile titlearea={"ACCOUNT"}/>
                    <h1>Profiel Pagina</h1>
                    <h2>Gegevens user</h2>
                </div>
            </section>
        </>
    );
}
export default Account;
//                    <p>Gebruikersnaam: {user && user.username}</p>
//                     /<p>Email: {user && user.user.email}</p>
//                     <Link to="/">Terug naar Home</Link>