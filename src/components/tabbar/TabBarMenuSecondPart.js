import React from 'react';
import './TabBarMenu.css';
import LinkTabBar from "../linktabbar/LinkTabBar";


function TabBarMenuSecondPart() {
    return (
        <nav className="tab-bar">
            <ul>
                <li>
                    <LinkTabBar reflink="/Parkeren-Amsterdam-Stadsdelen-Zuid-West" titleref="Amsterdam Zuid locatie gegevens" />
                </li>
                <li>
                    <LinkTabBar reflink="/ParkingWestTab" titleref="Amsterdam West locatie's" />
                </li>
            </ul>
        </nav>
    );
};

export default TabBarMenuSecondPart;