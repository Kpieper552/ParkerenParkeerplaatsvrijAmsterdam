import React from 'react';
import { NavLink } from 'react-router-dom';
import './TabBarMenu.css';


function TabBarMenuAccount() {
    return (
        <nav className="tab-bar">
            <ul>

                <li>
                    <NavLink activeClassName="active" to="/Account/AccountParkingAmsterdam">
                        Parkeren Amsterdam
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/Account/AccountParkingAmsterdamFreePlaces">
                        Lang Parkeren Plaatsen VRIJ
                    </NavLink>
                </li>

            </ul>
        </nav>
    );
};

export default TabBarMenuAccount;