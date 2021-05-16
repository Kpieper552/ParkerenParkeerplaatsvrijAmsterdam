import React, { useState, useRef, useContext } from 'react';
import '../../App.css';
import Tile from "../../components/tile/Tile";
import amsterdam from "../../assets/amsterdam.JPG";
import {useHistory, NavLink } from "react-router-dom";
//import { useauth } from '../firebase'
import { useForm } from 'react-hook-form';



function SignUp() {
    //const emailRef = useRef()
    //const passwordRef = useRef()
    //const passwordConfirmRef = useRef()
    //const { signup } = useAuth()
    const { register, handleSubmit } = useForm();
    //const [error, toggleError] = useState(false);
    //const history = useHistory();
    const [registerSuccess, toggleRegisterSuccess] = useState(false);

    async function onSubmit(data) {

  }
    console.log("hallo dit is een registerform");

    return (
        <>
            <Tile img={amsterdam} imgDescription={amsterdam}/>
            <div ><h1>Registreer</h1>
            <Tile >
                <form id="parkingAdam-weg-deel" onSubmit={handleSubmit(onSubmit)}>
                <br/>
                <h2>Registeer </h2>
                <label id="parkinglocation">
                    <h2>Email</h2>
                    <input type="text"
                           {...register("email")}
                           name="email" placeholder="email"/>
                </label>
                <br/><br/>
                <label id="parkinglocation">
                    <h2>Password</h2>
                    <input type="text"
                           {...register("password")}
                           name="password" placeholder="wachtwoord"/>
                </label>
                <br/>
                <br/>
                <button id="parkinglocationdetails" type="submit">
                   <label  >REGISTREER</label>
                </button><br/>
                <NavLink to="/login">Al geregistreerd? |>Login</NavLink>
                {registerSuccess === true && <p>Registeren is gelukt! Je wordt nu doorgestuurd naar de login pagina!</p> }
            </form>
            </Tile>
            </div>
        </>
    );
}
export default SignUp;