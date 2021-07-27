import React from 'react';
import './TabBarMenu.css';
import LinkTabBar from "../linktabbar/LinkTabBar";


function TabBarMenuSecond() {
    return (
        <nav className="tab-bar">
            <ul>
                <li>
                    <LinkTabBar reflink="/Parkeren-Amsterdam-Stadsdelen-Oost-ZuidOost" titleref="Amsterdam Zuid-Oost locatie's" />
                </li>
                <li>
                    <LinkTabBar reflink="/ParkingOostTab" titleref="Amsterdam Oost locatie's" />
                </li>
            </ul>
        </nav>
    );
};

export default TabBarMenuSecond;