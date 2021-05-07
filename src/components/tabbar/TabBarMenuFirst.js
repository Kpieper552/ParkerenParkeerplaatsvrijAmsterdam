import React from 'react';
import { NavLink } from 'react-router-dom';
import './TabBarMenu.css';

function TabBarMenuFirst() {
    return (
        <nav className="tab-bar">
            <ul>
                <li>
                    <NavLink activeClassName="active" to="/Parkeren-Amsterdam-Centrum">
                        🅿️ Parkeren Centrum Amsterdam
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

export default TabBarMenuFirst;