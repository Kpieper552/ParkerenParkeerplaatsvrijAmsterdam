import React from 'react';
import { NavLink } from 'react-router-dom';
import './TabBarMenu.css';


function TabBarMenuSecond() {
    return (
        <nav className="tab-bar">
            <ul>
                <li>
                <NavLink activeClassName="active" to="/Parkeren-Amsterdam-Stadsdelen-Oost-ZuidOost">
                     Amsterdam Zuid-Oost
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/ParkingOostTab">
                      Amsterdam Oost
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default TabBarMenuSecond;