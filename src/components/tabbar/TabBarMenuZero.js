import React from 'react';
import { NavLink} from 'react-router-dom';
import './TabBarMenu.css';


function TabBarMenuZero() {
    return (
        <nav className="tab-bar">
            <ul>
                <li>
                    <NavLink activeClassName="active" to="/">
                        🅿️ Kaart Parkeergarages Amsterdam
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/ParkingAmsterdamAll">
                        🅿️ Parkeren Amsterdam
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/ParkingTarifsAmsterdam">
                        🅿️ Tarieven
                    </NavLink>
                </li>

            </ul>
        </nav>
    );
};

export default TabBarMenuZero;