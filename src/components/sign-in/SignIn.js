import React, { useState, useRef,  } from 'react';
import '../../App.css';
import { useAuth } from '../../context/SignupContext';
import { useHistory, NavLink } from 'react-router-dom';


function SignIn() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login,  } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory();


    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError("")
            setLoading(true)
            setLoading(false)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/account")
        } catch {
            setLoading(false)
            setError("login is niet gelukt | check emailadres | check password - dient te bestaan uit 7 karakters")
        }
    }

    return (
        <>
            {error && (error) }
            {loading && loading}
            <form id="parkingAdam-form-deel" onSubmit={handleSubmit}>
                <br/><br/>
                <label id="parkinglocation-form">
                    <h2>Login
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
                <button default={loading} id="parkinglocationdetails-form" type="submit">
                    <label  >LOGIN</label>
                </button><br/><br/>
                <NavLink to="/passwordvergeten">  Password vergeten? </NavLink><br/><br/>
                <NavLink to="/registreer">  Geen Account |> Registreer</NavLink><br/><br/>
            </form>
        </>
    );
}
export default SignIn;