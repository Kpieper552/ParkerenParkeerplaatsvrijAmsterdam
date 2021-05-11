import React from 'react';
import { NavLink } from 'react-router-dom';
import './TabBarMenu.css';


function TabBarMenuZero() {
    return (
        <nav className="tab-bar">
            <ul>

                <li>
                    <NavLink activeClassName="active" to="/Home">
                        Parkeren Amsterdam
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/ParkingPlaatsenVrijTab">
                        Vrije Plaats
                    </NavLink>
                </li>

            </ul>
        </nav>
    );
};

export default TabBarMenuZero;