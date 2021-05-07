import React from 'react';
import '../App.css';
import Tile from "../components/tile/Tile";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import TabBarMenuSecond from "../components/tabbar/TabBarMenuSecond";
import ParkingZuidOost from "./tabpages/ParkingZuidOost";
import ParkingOost from "./tabpages/ParkingOost";




function ParkerenAmsterdamStadsdelenOostZuidOost() {
    return (
        <>
            <div ><h1>Parkeren Amsterdam Stadsdelen </h1>
                <Tile titlearea={"Parkeren per Zuid-Ooost, Oost, compas"}/>

            </div>
            {/*NAVIGATION-------------------- */}
            <nav >
                 {/*TAB -------------------- */}
              <Router>
                    <div className="parkingAdam-content">
                        <TabBarMenuSecond/>
                        <div className="tab-wrapper">
                            <Switch>
                                <Route exact path="/Parkeren-Amsterdam-Stadsdelen-Oost-ZuidOost">
                                    <ParkingZuidOost  />
                                </Route>
                                <Route path="/ParkingOost">
                                    <ParkingOost  />
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </Router>
            </nav>

        </>
    );
}
export default ParkerenAmsterdamStadsdelenOostZuidOost;