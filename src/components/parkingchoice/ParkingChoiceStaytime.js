import React from 'react';
import { NavLink } from 'react-router-dom';
import '../parkingchoice/ParkingChoice.css';

function ParkingChoiceStaytime() {
    return     (
        <>

            <ul >
                <li>
                    <NavLink to="/home"><button id="button-parking"><h6>| P |Kort Parkeren | P |</h6></button></NavLink>
                </li>
                <li>
                    <NavLink to="/login" activeClassName="activelink"><button id="button-parking"><h6>| P | Lang Parkeren | P | </h6></button></NavLink>
                </li>
            </ul>
        </>
    );
};
export default ParkingChoiceStaytime;