import React from 'react';
import { NavLink } from 'react-router-dom';
import './TabBarMenu.css';

function TabBarMenuThird() {
    return (
        <nav className="tab-bar">
            <ul>
                <li>
                    <NavLink activeClassName="active" to="/Parkeren-Amsterdam-ParkenRide">
                        Park & Ride locatie's
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/FietsParkeerPlekTab">
                        Fiets parkeerplekken locatie's
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default TabBarMenuThird;