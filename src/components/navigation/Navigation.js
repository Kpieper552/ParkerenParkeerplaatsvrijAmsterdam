import React from 'react';
import { NavLink } from 'react-router-dom';


function Navigation() {
    return     (

            <ul >
                <li>
                    <NavLink to="/"><button><h6>Home</h6></button></NavLink>
                </li>
                <li>
                    <NavLink to="/parkeren-amsterdam-centrum" activeClassName="activelink"><button><h6>| P | Centrum</h6></button></NavLink>
                </li>
                <li>
                    <NavLink to="/parkeren-amsterdam-stadsdelen-Oost-ZuidOost" activeClassName="activelink"><button><h6>| P | ZOost/Oost</h6></button></NavLink>
                </li>
                <li>
                    <NavLink to="/parkeren-amsterdam-stadsdelen-Zuid-West" activeClassName="activelink"><button><h6>| P | Zuid/West</h6></button></NavLink>
                </li>
                <li>
                    <NavLink to="/parkeren-amsterdam-parkenride" activeClassName="activelink"><button><h6>| P | Park&Ride</h6></button></NavLink>
                </li>
                <li>
                    <NavLink to="/registreer" activeClassName="activelink"><button><h6>Registreer</h6></button></NavLink>
                </li>
                <li>
                    <NavLink to="/login" activeClassName="activelink"><button><h6>Login</h6></button></NavLink>
                </li>
                <li>
                    <NavLink to="/account" activeClassName="activelink"><button><h6>Account</h6></button></NavLink>
                </li>

            </ul>

);
};
export default Navigation;