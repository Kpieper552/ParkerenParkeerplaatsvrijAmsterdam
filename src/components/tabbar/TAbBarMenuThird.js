import React from 'react';
import './TabBarMenu.css';
import LinkTabBar from "../linktabbar/LinkTabBar";

function TabBarMenuThird() {
    return (
        <nav className="tab-bar">
            <ul>
                <li>
                    <LinkTabBar reflink="/Parkeren-Amsterdam-ParkenRide" titleref="Park & Ride locatie's" />
                </li>
                <li>
                    <LinkTabBar reflink="/FietsParkeerPlekTab" titleref="Fiets parkeerplekken locatie's" />
                </li>
            </ul>
        </nav>
    );
};

export default TabBarMenuThird;