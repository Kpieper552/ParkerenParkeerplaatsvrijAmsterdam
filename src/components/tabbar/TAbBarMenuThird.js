import React from 'react';
import { NavLink } from 'react-router-dom';
import './TabBarMenu.css';

function TabBarMenuThird() {
    return (
        <nav className="tab-bar">
            <ul>
                <li>
                    <NavLink activeClassName="active" to="/Parkeren-Amsterdam-ParkenRide">
                        🅿️ Park & Ride Amsterdam
                    </NavLink>
                </li><li>
            </li>
                <li>
                    <NavLink activeClassName="active" to="/Fiets">
                        🅿️ Fiets parkeerplekken Amsterdam
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default TabBarMenuThird;