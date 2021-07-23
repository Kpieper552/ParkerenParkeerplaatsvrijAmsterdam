import React from 'react';
import { NavLink } from 'react-router-dom';
import '../parkingchoice/ParkingChoice.css';

function ParkingFirst() {
    return     (
        <>
            <ul >
                <li>
                    <NavLink to="/home"><button id="button-parking"><h6>| Parkeerlocatie informate |</h6></button></NavLink>
                </li>
                <li>
                    <NavLink to="/account" activeClassName="activelink"><button id="button-parking"><h6>| Parkeerlocatie informatie uitgebreid| </h6></button></NavLink>
                </li>

            </ul>
        </>
    );
};
export default ParkingFirst;