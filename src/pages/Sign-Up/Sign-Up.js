import React, { useState, useContext } from 'react';
import '../../App.css';
import Tile from "../../components/tile/Tile";
import kaart from "../../assets/kaart.jpg";
import {useHistory} from "react-router-dom";
//import { SignupContext } from '../context/SignupContext';
import { useForm } from 'react-hook-form';
import axios from 'axios';

//* improve: componenten maken van labels email en password en van de button

function SignUp() {
    //const { register, handleSubmit } = useForm();
    //const [error, toggleError] = useState(false);
    //const history = useHistory();
    //const [registerSuccess, toggleRegisterSuccess] = useState(false);

    //async function onSubmit(data) {
        //toggleError(false);
        //toggleRegisterSuccess(false);
        //console.log(data);
        //try {
            //const result = await axios.post({//*'http://localhost:3000/register'*//}, {
                //email: data.email,
                //password: data.password,

            //});
            //console.log(result);
            //toggleRegisterSuccess(true);
            //setTimeout(() => {
            //    history.push('/login');
            //}, 2080);


        //} catch(e) {
          //  console.error(error)
        //}
    //}
    console.log( "hallo dit is een registerform");

    return (
        <>
            <Tile img={kaart} imgDescription={kaart}/>
            <div ><h1>REGISTREER</h1>

                <Tile titlearea={"REGISTREER"}/>
                <Tile titlearea={"REGISTREER"}/>
                <Tile titlearea={"REGISTREER"}/>
            </div>

        </>
    );
}
export default SignUp;