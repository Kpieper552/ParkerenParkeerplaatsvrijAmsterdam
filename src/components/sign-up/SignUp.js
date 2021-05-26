import React, { useState, useRef } from 'react';
import '../../App.css';
import { useAuth } from '../../context/SignupContext';
import { useHistory, NavLink } from 'react-router-dom';

function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory();


    async function handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current.value !==
        passwordConfirmRef.current.value) {
            return setError("password komt niet overeen | password dient te bestaan uit 7 karakters")
            }
            try {
                setError("")
                setLoading(true)
                await signup(emailRef.current.value, passwordRef.current.value)
                //console.log(signup, "hallo je bent signup");
                history.push("/login")
            } catch {
                setLoading(false)
                setError("het is niet gelukt een account aan te maken")
            }
    }

    return (
            <>
            {error && (error) }
            {loading && loading}
             <form id="parkingAdam-form-deel" onSubmit={handleSubmit}>
                 <br/><br/>
                        <label id="parkinglocation-form">
                            <h2>Registeer
                            Email</h2>
                            <input type="text" ref={emailRef} required
                                   name="email" placeholder="email"/>
                        </label>
                     <br/><br/>
                        <label id="parkinglocation-form">
                            <h2>Password</h2>
                            <input type="text"  ref={passwordRef} required
                                   name="password" placeholder="wachtwoord"/>
                        </label>
                     <br/><br/>
                        <label id="parkinglocation-form">
                            <h2>Confirm Password</h2>
                            <input type="text" ref={passwordConfirmRef} required
                                   name="password" placeholder="bevestig wachtwoord" />
                        </label>
                     <br/><br/>
                        <button default={loading} id="parkinglocationdetails-form" type="submit">
                            <label  >REGISTREER</label>
                        </button><br/><br/>
                 <NavLink to="/login">  Al een Account |> Ga naar Login</NavLink><br/><br/>
             </form>
        </>
    );
}
export default SignUp;