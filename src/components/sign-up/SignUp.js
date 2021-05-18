import React, { useState, useRef, useContext } from 'react';
import '../../App.css';
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
                 < >
                    <form id="parkingAdam-form-deel" onSubmit={handleSubmit(onSubmit)}>
                        <br/>
                        <h2>Registeer </h2>
                        <label id="parkinglocation-form">
                            <h2>Email</h2>
                            <input type="text"
                                   {...register("email")}
                                   name="email" placeholder="email"/>
                        </label>
                        <br/><br/>
                        <label id="parkinglocation-form">
                            <h2>Password</h2>
                            <input type="text"
                                   {...register("password")}
                                   name="password" placeholder="wachtwoord"/>
                        </label>
                        <br/>
                        <br/>
                        <button id="parkinglocationdetails-form" type="submit">
                            <label  >REGISTREER</label>
                        </button><br/>
                        <NavLink to="/login">Al geregistreerd? |>Login</NavLink>
                        {registerSuccess === true && <p>Registeren is gelukt! Je wordt nu doorgestuurd naar de login pagina!</p> }
                    </form>
                </>

        </>
    );
}
export default SignUp;