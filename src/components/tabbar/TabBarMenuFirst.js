import React from 'react';
import './TabBarMenu.css';
import LinkTabBar from "../linktabbar/LinkTabBar";

function TabBarMenuFirst() {
    return (
        <nav className="tab-bar">
            <ul>
                <li>
                    <LinkTabBar reflink="/Parkeren-Amsterdam-Centrum" titleref="Parkeren Centrum en Noord locatie's" />
               </li>
                <li>
                    <LinkTabBar reflink="/FietsParkeerPlekTab" titleref="Fiets parkeerplekken locatie's" />
                </li>
            </ul>
        </nav>
    );
};

export default TabBarMenuFirst;