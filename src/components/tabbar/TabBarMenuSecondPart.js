import React from 'react';
import { NavLink } from 'react-router-dom';
import './TabBarMenu.css';


function TabBarMenuSecondPart() {
    return (
        <nav className="tab-bar">
            <ul>
                <li>
                    <NavLink activeClassName="active" to="/Parkeren-Amsterdam-Stadsdelen-Zuid-West">
                        🅿️ Amsterdam Zuid
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/ParkingWest">
                        🅿️ Amsterdam West
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default TabBarMenuSecondPart;