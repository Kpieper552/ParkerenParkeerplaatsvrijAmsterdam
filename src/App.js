import React, { useState, useEffect, } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import './App.css';
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Registreer from "./pages/Registreer/Registreer";
import Account from "./pages/Account/Account";
import ParkerenAmsterdamStadsdelenOostZuidOost from "./pages/ParkerenAmsterdam StadsdelenOostZuidOoost/Parkeren-Amsterdam-Stadsdelen-Oost-ZuidOost";
import ParkerenAmsterdamCentrum from "./pages/ParkerenAmsterdam Centrum/Parkeren-Amsterdam-Centrum";
import ParkerenAmsterdamParkenRide from "./pages/ParkerenAmsterdam ParkenRide/Parkeren-Amsterdam-ParkenRide";
import ParkerenAmsterdamStadsdelenZuidWest from "./pages/ParkerenAmsterdam StadsdelenZuidWest/Parkeren-Amsterdam-Stadsdelen-Zuid-West";
import TabBarMenuZero from "./components/tabbar/TabBarMenuZero";
import ParkingAmsterdamTab from "./pages/ParkingAmsterdamTab/ParkingAmsterdamTab";
import TabBarMenuSecond from "./components/tabbar/TabBarMenuSecond";
import ParkingZuidOostTab from "./pages/ParkingZuidOostTab/ParkingZuidOostTab";
import ParkingOostTab from "./pages/ParkingOostTab/ParkingOostTab";
import TabBarMenuThird from "./components/tabbar/TAbBarMenuThird";
import ParkAndRideTab from "./pages/ParkAndRideTab/ParkAndRideTab";
import FietsParkeerPlekTab from "./pages/FietsParkeerPlekTab/FietsParkeerPlekTab";
import TabBarMenuFirst from "./components/tabbar/TabBarMenuFirst";
import ParkingCentrumTab from "./pages/ParkingCentrumTab/ParkingCentrumTab";
import TabBarMenuSecondPart from "./components/tabbar/TabBarMenuSecondPart";
import ParkingZuidTab from "./pages/ParkingZuidTab/ParkingZuidTab";
import ParkingWestTab from "./pages/ParkingWestTab/ParkingWestTab";
import Navigation from "./components/navigation/Navigation";
import ParkingPlaatsenVrijTab from "./pages/ParkingPlaatsenVrijTab/ParkingPlaatsenVrijTab";
import AccountParkingAmsterdam from "./pages/Account/AccountParkingAmsterdam";
import AccountParkingAmsterdamFreePlaces from "./pages/Account/AccountParkingAmsterdamFreePlaces";
import TabBarMenuAccount from "./components/tabbar/TabBarMenuAccount";
import Amsterdam from "./components/fotoarea/Amsterdam";
import Parking from "./components/parking/Parking";
import Content from "./components/parking/Content";
import ParkingFirst from "./components/parking/ParkingFirst";
import ParkingSecond from "./components/parking/ParkingSecond";


function App() {
    const [error, setError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    useEffect (() => {
        async function fetchData() {
            setError(false);
            toggleLoading(true);
            try {
                //const response = await axios.get('http://opd.it-t.nl/data/amsterdam/ParkingLocation.json');
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
                         <Navigation /><br/>
                     </div>
                  <div>
                      <Amsterdam/>
                      <Content/>
                  </div>
                  <div className="parkingAdam-header">
                       <Parking/>
                  </div>
                  <div className="parkingAdam-header">
                      <ParkingFirst/>
                  </div>

            {/*NAVIGATION-------------------- */}
            <Switch>
                {/*PAGE -------------------- */}
                <Route exact path="/home">
                    <Home />
                    {/*NAVIGATION-------------------- */}
                    <Router>
                        {/*TAB -------------------- */}
                            <div className="parkingAdam-content">
                                <TabBarMenuZero/>
                                <div className="tab-wrapper">
                                    <Switch>
                                        <Route exact path="/home">
                                            <ParkingAmsterdamTab/>
                                         </Route>
                                        <Route path="/parkingplaatsenvrijtab">
                                            <ParkingPlaatsenVrijTab />
                                        </Route>
                                    </Switch>
                                </div>
                            </div>
                    </Router>

                </Route>
                {/*PAGE -------------------- */}
                <Route exact path="/parkeren-amsterdam-stadsdelen-Oost-ZuidOost">
                    <ParkerenAmsterdamStadsdelenOostZuidOost />
                    {/*NAVIGATION-------------------- */}

                        <Router>
                        {/*TAB -------------------- */}
                        <>
                            <div className="parkingAdam-content">
                                <TabBarMenuSecond/>
                                <div className="tab-wrapper">
                                    <Switch>
                                        <Route exact path="/Parkeren-Amsterdam-Stadsdelen-Oost-ZuidOost">
                                            <ParkingZuidOostTab/>
                                        </Route>
                                        <Route path="/ParkingOostTab">
                                            <ParkingOostTab/>
                                        </Route>
                                    </Switch>
                                </div>
                            </div>
                        </>
                        </Router>

                </Route>
                {/*PAGE -------------------- */}
                <Route exact path="/parkeren-amsterdam-stadsdelen-Zuid-West">
                    <ParkerenAmsterdamStadsdelenZuidWest />
                    {/*NAVIGATION-------------------- */}

                    <Router>
                        {/*TAB -------------------- */}

                            <div className="parkingAdam-content">
                                <TabBarMenuSecondPart/>
                                <div className="tab-wrapper">
                                    <Switch>
                                        <Route exact path="/Parkeren-Amsterdam-Stadsdelen-Zuid-West">
                                            <ParkingZuidTab/>
                                        </Route>
                                        <Route path="/ParkingWestTab">
                                            <ParkingWestTab/>
                                        </Route>
                                    </Switch>
                                </div>
                            </div>
                        </Router>

                </Route>
                {/*PAGE -------------------- */}
                <Route excat path="/parkeren-amsterdam-centrum">
                    <ParkerenAmsterdamCentrum />
                    {/*NAVIGATION-------------------- */}

                        <Router>
                            {/*TAB -------------------- */}
                            <div className="parkingAdam-content">
                                <TabBarMenuFirst/>
                                <div className="tab-wrapper">
                                    <Switch>
                                        <Route exact path="/Parkeren-Amsterdam-Centrum">
                                            <ParkingCentrumTab/>
                                        </Route>
                                        <Route path="/FietsParkeerPlekTab">
                                            <FietsParkeerPlekTab/>
                                        </Route>
                                    </Switch>
                                </div>
                            </div>
                        </Router>

                </Route>
                {/*PAGE -------------------- */}
                <Route exact path="/parkeren-amsterdam-parkenride">
                    <ParkerenAmsterdamParkenRide />
                    {/*NAVIGATION-------------------- */}

                        <Router>
                        {/*TAB -------------------- */}
                            <div className="parkingAdam-content">
                                <TabBarMenuThird/>
                                <div className="tab-wrapper">
                                    <Switch>
                                        <Route exact path="/Parkeren-Amsterdam-ParkenRide">
                                            <ParkAndRideTab/>
                                        </Route>
                                        <Route path="/FietsParkeerPlekTab">
                                            <FietsParkeerPlekTab/>
                                        </Route>
                                    </Switch>
                                </div>
                            </div>
                        </Router>
                </Route>
                {/*PAGE -------------------- */}
                <Route path="/registreer">
                    <Registreer />
                </Route>
                {/*PAGE -------------------- */}
                <Route path="/login">
                    <Login />
                </Route>
                {/*PAGE -------------------- */}
                <Route path="/account">
                    <Account />
                    {/*TAB -------------------- */}
                    <div className="parkingAdam-content">
                        <TabBarMenuAccount/>
                        <div className="tab-wrapper">
                            <Switch>
                                <Route exact path="/account">
                                    <AccountParkingAmsterdam/>
                                </Route>
                                <Route path="/account/AccountParkingAmsterdamFreePlaces">
                                    <AccountParkingAmsterdamFreePlaces />
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </Route>
            </Switch>
                  <div>
                      <Content/>
                  </div>
                  <div className="parkingAdam-header">
                      <ParkingSecond/>
                  </div>
                  <div  className="parkingAdam-header">
                      <Navigation />
                  </div>
        </Router>
      </nav>
    </>
  );
}
export default App
