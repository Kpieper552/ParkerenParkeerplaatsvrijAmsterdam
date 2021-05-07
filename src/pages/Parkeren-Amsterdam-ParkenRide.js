import React from 'react';
import '../App.css';
import Tile from "../components/tile/Tile";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Fiets from "./tabpages/Fiets";
import TabBarMenuThird from "../components/tabbar/TAbBarMenuThird";
import ParkAndRide from "./tabpages/ParkAndRide";


function ParkerenAmsterdamParkenRide() {
    return (
        <>
            <div ><h1>Parkeren Amsterdam Park & Ride </h1>
                <Tile titlearea={"Parkeren Amsterdam Park & Ride en Fietsparkeerplekken "}/>

            </div>
            {/*NAVIGATION-------------------- */}
            <nav >
                {/*TAB -------------------- */}
                <Router>
                    <div className="parkingAdam-content">
                        <TabBarMenuThird/>
                        <div className="tab-wrapper">
                            <Switch>
                                <Route exact path="/Parkeren-Amsterdam-ParkenRide">
                                    <ParkAndRide  />
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
export default ParkerenAmsterdamParkenRide;