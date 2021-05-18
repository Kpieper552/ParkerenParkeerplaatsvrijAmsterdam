import React, { useState, useContext, } from 'react';
import '../../App.css';
import { NavLink } from "react-router-dom";
//import { SignupContext } from '../context/SignupContext';
import { useForm, } from 'react-hook-form';
import axios from 'axios';


function SignIn() {
    const {register, handleSubmit} = useForm();
    const [error, toggleError] = useState(false);
    const [success, toggleRegisterSuccess] = useState(false);

    async function onSubmit(data) {
        toggleError(false);

        //console.log(result, "hallo dit is verzonden");
        try {
            const result = await axios.post();
            console.log(result);
            localStorage.setItem();
            toggleRegisterSuccess(true);

        } catch(e) {
            console.error(error)
        }
    }
    return (
        <>
            <>
                <form id="parkingAdam-weg-deel" onSubmit={handleSubmit(onSubmit)}>
                    {success ?  (<NavLink to="/account"  > d </NavLink>, <h2>Inloggen is gelukt! Je wordt nu doorgestuurd </h2> )  :
                        (<>
                            <h2>Login </h2>
                            <label id="parkinglocation">
                                <h2>Email</h2>

                                <input type="text"
                                       {...register("email")}
                                       name="email" placeholder="email"/>
                            </label>
                            <br/>
                            <br/>
                            <label id="parkinglocation">
                                <h2>Password</h2>
                                <input type="text"
                                       {...register("password")}
                                       name="password" placeholder="wachtwoord"/>
                            </label>
                            <br/><br/>
                            <button id="parkinglocationdetails" type="submit">
                                <label >LOGIN</label>
                            </button><br/>
                            <NavLink to="/sign-up">Geen Account> |>Registreer</NavLink>
                        </>)}
                </form>
            </>
        </>
    );
}
export default SignIn;