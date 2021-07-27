import React from 'react';
import { NavLink } from 'react-router-dom';
import './LinkParkingButton.css';

function LinkParkingButton( { reflink, buttontittle }) {
    return     (

                    <NavLink to={reflink}><button id="button-parking"><h6>| {buttontittle} |</h6></button></NavLink>
    );
};
export default LinkParkingButton;