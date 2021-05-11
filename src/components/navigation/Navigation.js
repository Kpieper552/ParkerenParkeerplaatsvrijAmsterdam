import React from 'react';
import { NavLink } from 'react-router-dom';


function Navigation() {
    return     (

            <ul >
                <li>
                    <NavLink to="/"><button>Home</button></NavLink>
                </li>
                <li>
                    <NavLink to="/parkeren-amsterdam-centrum" activeClassName="activelink"><button>P| Centrum</button></NavLink>
                </li>
                <li>
                    <NavLink to="/parkeren-amsterdam-stadsdelen-Oost-ZuidOost" activeClassName="activelink"><button>P| ZOost/Oost</button></NavLink>
                </li>
                <li>
                    <NavLink to="/parkeren-amsterdam-stadsdelen-Zuid-West" activeClassName="activelink"><button>P| Zuid/West</button></NavLink>
                </li>
                <li>
                    <NavLink to="/parkeren-amsterdam-parkenride" activeClassName="activelink"><button>Park&Ride</button></NavLink>
                </li>
                <li>
                    <NavLink to="/sign-up" activeClassName="activelink"><button>Registreer</button></NavLink>
                </li>
                <li>
                    <NavLink to="/login" activeClassName="activelink"><button>Login</button></NavLink>
                </li>
                <li>
                    <NavLink to="/account" activeClassName="activelink"><button>Account</button></NavLink>
                </li>

            </ul>

);
};
export default Navigation;