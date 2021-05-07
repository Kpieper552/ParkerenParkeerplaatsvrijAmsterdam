import React from 'react';
import '../App.css';
import Tile from "../components/tile/Tile";

import {BrowserRouter as Router, NavLink, Route, Switch} from "react-router-dom";
import TabBarMenuZero from "../components/tabbar/TabBarMenuZero";
import ParkingMapAmsterdam from "./tabpages/ParkingMapAmsterdam";
import ParkingTarifsAmsterdam from "./tabpages/ParkingTarifsAmsterdam";
import ParkingAmsterdamAll from "./tabpages/ParkingAmsterdamAll";


function Home() {
    return (
        <>
            <div>
                <h1>Parkeren Amsterdam</h1>
                <Tile titlearea={"content"}/>
                <Tile titlearea={"content"}/>

                <Tile titlearea="Locaties Centrum">
                        <div id="locationFree">➡️Parkeergarages | Parkeerplaatsen VRIJ  | Locatie gegevens ><span>
                    <NavLink to="/Parkeren-Amsterdam-Centrum" id="tabmenu"  > 🅿️ </NavLink>
                    </span></div><br/>
                    </Tile>
                    <Tile titlearea="Locaties Park & Ride">
                        <div id="locationFree">➡️Parkeergarages | Parkeerplaatsen VRIJ  | Locatie gegevens ><span>
                    <NavLink to="/Parkeren-Amsterdam-ParkenRide" id="tabmenu"  > 🅿️ </NavLink>
                    </span>
                    </div>
                    </Tile>
                    <Tile titlearea="Locaties Zuid & West">
                        <div id="locationFree">➡️Parkeergarages | Parkeerplaatsen VRIJ  | Locatie gegevens ><span>
                     <NavLink to="/Parkeren-Amsterdam-Stadsdelen-Zuid-West" id="tabmenu"  > 🅿️ </NavLink>

                    </span>
                    </div>
                    </Tile>
                    <Tile titlearea="Locaties Zuid-Oost & Oost">
                        <div id="locationFree">➡️Parkeergarages | Parkeerplaatsen VRIJ  | Locatie gegevens ><span>
                    <NavLink to="/Parkeren-Amsterdam-Stadsdelen-Oost-ZuidOost" id="tabmenu"  > 🅿️ </NavLink>
                    </span>
                    </div>
                    </Tile>
                <Tile titlearea={"content"}/>
                <Tile titlearea={"content"}/>
            </div>

            {/*NAVIGATION-------------------- */}
            <nav >
                {/*TAB -------------------- */}
                <Router>
                    <div className="parkingAdam-content">
                        <TabBarMenuZero/>
                        <div className="tab-wrapper">
                            <Switch>
                                <Route exact path="/">
                                    <ParkingMapAmsterdam  />
                                </Route>
                                <Route path="/ParkingAmsterdamAll">
                                    < ParkingAmsterdamAll />
                                </Route>
                                <Route path="/ParkingTarifsAmsterdam">
                                    < ParkingTarifsAmsterdam />
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </Router>
             </nav>
        </>
    );
}
export default Home;