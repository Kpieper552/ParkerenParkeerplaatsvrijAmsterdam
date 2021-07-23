import React, { useState, useRef,  } from 'react';
import '../forgotpassword/ForgotPassword.css';
import { useAuth } from '../../context/SignupContext';
import { NavLink } from 'react-router-dom';

function ForgotPassword() {
    const emailRef = useRef()
    const { resetPassword  } = useAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage("")
            setError("")
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("check je email inbox voor verdere instructies")

        } catch {
            setLoading(false)
            setError("reset password is niet gelukt")
        }
        setLoading(false)
    }

    return (
        <>
            {error && (error) }
            {loading && loading}
            {message && (message)}
            <form id="parkingAdam-form-container" onSubmit={handleSubmit}>
                <br/><br/>
                <h2>Password Reset Email</h2>
                <label id="parkingAdam-form-label">
                    <input type="text" ref={emailRef} required
                           name="email" placeholder="email"/>
                </label>
                <br/><br/>
                <button default={loading} id="parkingAdam-form-button" type="submit">
                    <label>RESET PASSWORD</label>
                </button><br/><br/>
                <NavLink to="/login"> Login </NavLink><br/><br/>
                <NavLink to="/registreer">  Geen Account |> Registreer</NavLink><br/><br/>
            </form>
        </>
    );
}
export default ForgotPassword;