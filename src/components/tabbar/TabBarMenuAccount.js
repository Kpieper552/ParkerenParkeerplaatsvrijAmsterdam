import React from 'react';
import { NavLink } from 'react-router-dom';
import './TabBarMenu.css';


function TabBarMenuAccount() {
    return (
        <nav className="tab-bar">
            <ul>

                <li>
                    <NavLink activeClassName="active" to="/Account">
                        Parkeren Amsterdam
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/AccountParkingAmsterdamFreePlaces">
                        Vrije Plaats Lang Parkeren
                    </NavLink>
                </li>

            </ul>
        </nav>
    );
};

export default TabBarMenuAccount;