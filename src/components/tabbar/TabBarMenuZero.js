import React from 'react';
import './TabBarMenu.css';
import LinkTabBar from "../linktabbar/LinkTabBar";


function TabBarMenuZero() {
    return (
        <nav className="tab-bar">
            <ul>

                <li>
                    <LinkTabBar reflink="/home" titleref="Parkeren Amsterdam locaties" />
                </li>
                <li>
                    <LinkTabBar reflink="/ParkingPlaatsenVrijTab" titleref="Kort parkeren Plaatsen VRIJ" />
                </li>

            </ul>
        </nav>
    );
};

export default TabBarMenuZero;