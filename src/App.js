import React, { useState, useEffect} from 'react';
import axios from 'axios';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Tile from "./components/tile/Tile";
import './App.css';
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Sign-Up";
import Account from "./pages/Account";
import ParkerenAmsterdamStadsdelenOostZuidOost from "./pages/ParkerenAmsterdam StadsdelenOostZuidOoost/Parkeren-Amsterdam-Stadsdelen-Oost-ZuidOost";
import ParkerenAmsterdamCentrum from "./pages/ParkerenAmsterdam Centrum/Parkeren-Amsterdam-Centrum";
import ParkerenAmsterdamParkenRide from "./pages/ParkerenAmsterdam ParkenRide/Parkeren-Amsterdam-ParkenRide";
import ParkerenAmsterdamStadsdelenZuidWest from "./pages/ParkerenAmsterdam StadsdelenZuidWest/Parkeren-Amsterdam-Stadsdelen-Zuid-West";
import TabBarMenuZero from "./components/tabbar/TabBarMenuZero";
import ParkingAmsterdamAll from "./pages/ParkingAmsterdamAll/ParkingAmsterdamAll";
import ParkingTarifsAmsterdam from "./pages/Home/ParkingTarifsAmsterdam";
import TabBarMenuSecond from "./components/tabbar/TabBarMenuSecond";
import ParkingZuidOost from "./pages/ParkingZuidOost/ParkingZuidOost";
import ParkingOost from "./pages/ParkingOost/ParkingOost";
import TabBarMenuThird from "./components/tabbar/TAbBarMenuThird";
import ParkAndRide from "./pages/ParkAndRide/ParkAndRide";
import Fiets from "./pages/Fiets/Fiets";
import TabBarMenuFirst from "./components/tabbar/TabBarMenuFirst";
import ParkingCentrum from "./pages/ParkingCentrum/ParkingCentrum";
import TabBarMenuSecondPart from "./components/tabbar/TabBarMenuSecondPart";
import ParkingZuid from "./pages/ParkingZuid/ParkingZuid";
import ParkingWest from "./pages/ParkingWest/ParkingWest";
import Navigation from "./components/navigation/Navigation";
//apikey aanmaken in env!!!!
//REACT_MAPBOX_ACCES_TOKEN=pnpmk.eyJ1Ijoia2FyaW5hcGllcGVyIiwiYSI6ImNrb2JsbXp0MjFlNWwycXFrMmZ6NG4yOWoifQ.SCXs3rjvsATv5qSM1AZ23w

function App() {
    const [error, setError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    useEffect (() => {
        async function fetchData() {
            setError(false);
            toggleLoading(true);
            try {
                const response = await axios.get('http://opd.it-t.nl/data/amsterdam/ParkingLocation.json');
                console.log("ik zoek de APINAAM", response.data.features);
                toggleLoading(false);
            } catch (error) {
                console.log(error);
                setError(true);
                toggleLoading(false);
            }
        }
        fetchData();
    }, []);

  return (
      <>

            {error && (<span>error </span>)}
            {loading && (<span>loading...</span>)}
          <nav >
              <Router>
                    <div  className="parkingAdam-header">
                         <Navigation />
                    </div>
            {/*NAVIGATION-------------------- */}

            <Switch>
                {/*PAGE -------------------- */}
                <Route exact path="/">
                    <Home />
                    {/*NAVIGATION-------------------- */}
                    <nav >
                        {/*TAB -------------------- */}
                        <Router>
                            <div className="parkingAdam-content">
                                <TabBarMenuZero/>
                                <div className="tab-wrapper">
                                    <Switch>
                                        <Route exact path="/Home">
                                            {<ParkingAmsterdamAll />}
                                        </Route>
                                        <Route path="/ParkingTarifsAmsterdam">
                                            {<ParkingTarifsAmsterdam />}
                                        </Route>
                                    </Switch>
                                </div>
                            </div>
                        </Router>
                    </nav>
                </Route>
                {/*PAGE -------------------- */}
                <Route exact path="/parkeren-amsterdam-stadsdelen-Oost-ZuidOost">
                    <ParkerenAmsterdamStadsdelenOostZuidOost />
                    {/*NAVIGATION-------------------- */}
                    <nav >
                        {/*TAB -------------------- */}
                        <Router>
                            <div className="parkingAdam-content">
                                <TabBarMenuSecond/>
                                <div className="tab-wrapper">
                                    <Switch>
                                        <Route exact path="/Parkeren-Amsterdam-Stadsdelen-Oost-ZuidOost">
                                            {<ParkingZuidOost  />}
                                        </Route>
                                        <Route path="/ParkingOost">
                                            {<ParkingOost  />}
                                        </Route>
                                    </Switch>
                                </div>
                            </div>
                        </Router>
                    </nav>
                </Route>
                {/*PAGE -------------------- */}
                <Route exact path="/parkeren-amsterdam-stadsdelen-Zuid-West">
                    <ParkerenAmsterdamStadsdelenZuidWest />
                    {/*NAVIGATION-------------------- */}
                    <nav >
                        {/*TAB -------------------- */}
                        <Router>
                            <div className="parkingAdam-content">
                                <TabBarMenuSecondPart/>
                                <div className="tab-wrapper">
                                    <Switch>
                                        <Route exact path="/Parkeren-Amsterdam-Stadsdelen-Zuid-West">
                                            <Tile children={<ParkingZuid />}/>
                                        </Route>
                                        <Route path="/ParkingWest">
                                            <Tile children={<ParkingWest  />}/>
                                        </Route>
                                    </Switch>
                                </div>
                            </div>
                        </Router>
                    </nav>
                </Route>
                {/*PAGE -------------------- */}
                <Route excat path="/parkeren-amsterdam-centrum">
                    <ParkerenAmsterdamCentrum />
                    {/*NAVIGATION-------------------- */}
                    <nav >
                        {/*TAB -------------------- */}
                        <Router>
                            <div className="parkingAdam-content">
                                <TabBarMenuFirst/>
                                <div className="tab-wrapper">
                                    <Switch>
                                        <Route exact path="/Parkeren-Amsterdam-Centrum">
                                            <Tile children={<ParkingCentrum  />}/>
                                        </Route>
                                        <Route path="/Fiets">
                                            <Tile children={<Fiets  />}/>
                                        </Route>
                                    </Switch>
                                </div>
                            </div>
                        </Router>
                    </nav>
                </Route>
                {/*PAGE -------------------- */}
                <Route exact path="/parkeren-amsterdam-parkenride">
                    <ParkerenAmsterdamParkenRide />
                    {/*NAVIGATION-------------------- */}
                    <Router>
                        {/*TAB -------------------- */}
                        <nav>
                            <div className="parkingAdam-content">
                                <TabBarMenuThird/>
                                <div className="tab-wrapper">
                                    <Switch>
                                        <Route exact path="/Parkeren-Amsterdam-ParkenRide">
                                            <Tile children={<ParkAndRide  />}/>
                                        </Route>
                                        <Route path="/Fiets">
                                            <Tile children={<Fiets  />}/>
                                        </Route>
                                    </Switch>
                                </div>
                            </div>
                        </nav>
                    </Router>
                </Route>
                {/*PAGE -------------------- */}
                <Route path="/sign-up">
                    <SignUp />
                </Route>
                {/*PAGE -------------------- */}
                <Route path="/login">
                    <Login />
                </Route>
                {/*PAGE -------------------- */}
                <Route path="/account">
                    <Account />
                </Route>
            </Switch>
        </Router>
      </nav>
    </>
  );
}
export default App
