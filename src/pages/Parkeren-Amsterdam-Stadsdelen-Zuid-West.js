import React from 'react';
import '../App.css';
import Tile from "../components/tile/Tile";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import TabBarMenuSecondPart from "../components/tabbar/TabBarMenuSecondPart";
import ParkingZuid from "./tabpages/ParkingZuid";
import ParkingWest from "./tabpages/ParkingWest";




function ParkerenAmsterdamStadsdelenZuidWest() {
    return (
        <>
            <div ><h1>Parkeren Amsterdam Stadsdelen </h1>
                <Tile titlearea={"Parkeren Stadsdelen Zuid en West, compas"}/>

            </div>
            {/*NAVIGATION-------------------- */}
            <nav >
                {/*TAB -------------------- */}
                <Router>
                    <div className="parkingAdam-content">
                        <TabBarMenuSecondPart/>
                        <div className="tab-wrapper">
                            <Switch>
                                <Route exact path="/Parkeren-Amsterdam-Stadsdelen-Zuid-West">
                                    <ParkingZuid  />
                                </Route>
                                <Route path="/ParkingWest">
                                    <ParkingWest  />
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </Router>
            </nav>

        </>
    );
}
export default ParkerenAmsterdamStadsdelenZuidWest;