import React, { useState, useRef } from 'react';
import { useAuth } from '../../context/SignupContext';
import { useHistory, NavLink } from 'react-router-dom';
import '../sign-up/SignUp.css';


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
             <form id="parkingAdam-form-container" onSubmit={handleSubmit}>
                 <br/><br/>
                 <h2>Registeer Email</h2>
                 <label id="parkingAdam-form-label">
                     <input type="text" ref={emailRef} required
                            name="email" placeholder="email"/>
                 </label>
                 <br/><br/>
                 <h2>Password</h2>
                        <label id="parkingAdam-form-label">
                            <input type="text"  ref={passwordRef} required
                                   name="password" placeholder="wachtwoord"/>
                        </label>
                     <br/><br/>
                 <h2>Confirm Password</h2>
                        <label id="parkingAdam-form-label">
                            <input type="text" ref={passwordConfirmRef} required
                                   name="password" placeholder="bevestig wachtwoord" />
                        </label>
                     <br/><br/>
                        <button default={loading} id="parkingAdam-form-button" type="submit">
                            <label  >REGISTREER</label>
                        </button><br/><br/>
                 <NavLink to="/login">  Al een Account |> Ga naar Login</NavLink><br/><br/>
             </form>
        </>
    );
}
export default SignUp;