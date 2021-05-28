import React from 'react';
import { NavLink } from 'react-router-dom';


function ParkingFirst() {
    return     (
        <>
            <ul >
                <li>
                    <NavLink to="/home"><button id="button-parking"><h6>| Parkeerlocatie informate |</h6></button></NavLink>
                </li>
                <li>
                    <NavLink to="/login" activeClassName="activelink"><button id="button-parking"><h6>| Parkeerlocatie informatie uitgebreid| </h6></button></NavLink>
                </li>

            </ul>
        </>
    );
};
export default ParkingFirst;