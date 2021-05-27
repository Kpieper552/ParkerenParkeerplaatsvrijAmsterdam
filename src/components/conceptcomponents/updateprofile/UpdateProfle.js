import React, { useState, useRef,  } from 'react';
import '../../../App.css';
import { useAuth } from '../../../context/SignupContext';
import {NavLink, useHistory} from 'react-router-dom';

function UpdateProfile() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updateEmail, updatePassword } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory();


    function handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current?.value !== passwordConfirmRef?.current.value) {
            return setError("Passwords do not match")
        } console.log("handel dit af")

        const promises = []
        setLoading(true)
        setError("")

        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value !== currentUser.password) {
            promises.push(updatePassword(passwordRef.current.value))
        }
        Promise.all(promises)
            .then(() => {
            console.log("wat is ")
            history.push("/")

        }).catch(() => {
            setError("niet gelukt om om account te updaten")
        }).finally(() => {
            setLoading(false)
            })
    }

    return (
        <>
            {error && (error) }
            {loading && loading}
            <form id="parkingAdam-form-deel" onSubmit={handleSubmit}>
                <br/><br/>
                <label id="parkinglocation-form">
                    <h2>Update Account
                        Email</h2>
                    <input type="text" ref={emailRef} required
                           defaultValue={currentUser.email}
                           name="email" placeholder="email"/>
                </label>
                <br/><br/>
                <label id="parkinglocation-form">
                    <h2>Password</h2>
                    <input type="text"  ref={passwordRef} required
                           defaultValue={currentUser.password}
                           placeholder="laat blank om gelijk te blijven"
                           name="password" />
                </label>
                <br/><br/>
                <label id="parkinglocation-form">
                    <h2>Confirm Password</h2>
                    <input type="text"  ref={passwordRef} required
                           defaultValue={currentUser.password}
                           placeholder="laat blank om gelijk te blijven"
                           name="password" />
                </label>
                <br/><br/>
                <label  >UPDATE ACCOUNT</label>
                <input  id="parkinglocationdetails-form" type="submit"/>
                <NavLink to="/account">  Cancel</NavLink><br/><br/>
            </form>
        </>
    );
}
export default UpdateProfile;