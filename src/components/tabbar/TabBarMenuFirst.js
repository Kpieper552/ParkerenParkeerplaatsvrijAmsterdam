import React from 'react';
import { NavLink } from 'react-router-dom';
import './TabBarMenu.css';

function TabBarMenuFirst() {
    return (
        <nav className="tab-bar">
            <ul>
                <li>
                    <NavLink activeClassName="active" to="/Parkeren-Amsterdam-Centrum">
                         Parkeren Centrum en Noord locatie's
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

export default TabBarMenuFirst;