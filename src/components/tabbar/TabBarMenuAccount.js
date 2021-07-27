import React from 'react';
import './TabBarMenu.css';
import LinkTabBar from "../linktabbar/LinkTabBar";


function TabBarMenuAccount() {
    return (
        <nav className="tab-bar">
            <ul>

                <li>
                    <LinkTabBar reflink="/Account/AccountParkingAmsterdam" titleref="Parkeren Amsterdam" />
                </li>
                <li>
                    <LinkTabBar reflink="/Account/AccountParkingAmsterdamFreePlaces" titleref="Lang Parkeren Plaatsen VRIJ" />
                </li>

            </ul>
        </nav>
    );
};

export default TabBarMenuAccount;