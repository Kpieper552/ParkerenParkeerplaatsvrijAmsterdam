import React from 'react';
import { NavLink } from 'react-router-dom';


function ParkingFirst() {
    return     (
        <>

            <ul >
                <li>
                    <NavLink to="/home"><button id="button-parking"><h6>| Parkeer per stadsdeel |</h6></button></NavLink>
                </li>
                <li>
                    <NavLink to="/parkeren-amsterdam-parkenride" activeClassName="activelink"><button id="button-parking"><h6>| P&R + OV naar Centrum| </h6></button></NavLink>
                </li>

            </ul>
        </>
    );
};
export default ParkingFirst;