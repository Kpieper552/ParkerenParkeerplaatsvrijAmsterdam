import React from 'react';
import { NavLink } from 'react-router-dom';
import './TabBarMenu.css';


function TabBarMenuSecondPart() {
    return (
        <nav className="tab-bar">
            <ul>
                <li>
                    <NavLink activeClassName="active" to="/Parkeren-Amsterdam-Stadsdelen-Zuid-West">
                        Amsterdam Zuid locatie gegevens
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/ParkingWestTab">
                        Amsterdam West locatie's
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default TabBarMenuSecondPart;