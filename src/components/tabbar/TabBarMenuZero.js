import React from 'react';
import { NavLink } from 'react-router-dom';
import './TabBarMenu.css';


function TabBarMenuZero() {
    return (
        <nav className="tab-bar">
            <ul>

                <li>
                    <NavLink activeClassName="active" to="/home">
                        Parkeren Amsterdam locaties
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/ParkingPlaatsenVrijTab">
                        Kort parkeren Plaatsen VRIJ
                    </NavLink>
                </li>

            </ul>
        </nav>
    );
};

export default TabBarMenuZero;