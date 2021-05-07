import React from 'react';
import '../App.css';
import Tile from "../components/tile/Tile";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import parkeericon from "../assets/parkingicon.jpg";
import TabBarMenuFirst from "../components/tabbar/TabBarMenuFirst";
import ParkingCentrum from "./tabpages/ParkingCentrum";
import Fiets from "./tabpages/Fiets";


function ParkerenAmsterdamCentrum() {
    return (
        <>
            <div ><h1>Parkeren Amsterdam Centrum </h1>
                <Tile titlearea={"Parkeren Centrum en Fietsparkeerplekken "}/>

            </div>
            {/*NAVIGATION-------------------- */}
            <nav >
                {/*TAB -------------------- */}
                <Router>
                    <div className="parkingAdam-content">
                        <TabBarMenuFirst/>
                        <div className="tab-wrapper">
                            <Switch>
                                <Route exact path="/Parkeren-Amsterdam-Centrum">
                                    <ParkingCentrum  />
                                </Route>
                                <Route path="/Fiets">
                                    <Fiets  />
                                </Route>
                              </Switch>
                        </div>
                    </div>
                </Router>
            </nav>

        </>
    );
}
export default ParkerenAmsterdamCentrum;