import React, { useState, useEffect, } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import './App.css';
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Passwordvergeten from "./pages/passwordvergeten/Passwordvergeten";
import Registreer from "./pages/Registreer/Registreer";
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
import Amsterdam from "./components/fotoarea/Amsterdam";
import Parking from "./components/parking/Parking";
import Content from "./components/content/Content";
import Content1 from "./components/content/Content1";
import ContentFooter from "./components/content/ContentFooter";
import ParkingFirst from "./components/parking/ParkingFirst";
import ParkingSecond from "./components/parking/ParkingSecond";
import PrivateRoute from "./components/privateroute/PrivateRoute";

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
                  <div className="parkingAdam-header">
                      <Amsterdam/>
                  </div>
                  <div className="parkingAdam-container">
                      <Content/>
                  </div>
                  <div className="parkingAdam-container">
                       <Parking/>
                  </div>
                  <div className="parkingAdam-container">
                      <ParkingFirst/>
                  </div>
                  <div className="parkingAdam-container">
                      <ParkingSecond/>
                  </div>
                  <div className="parkingAdam-container">
                      <Content1/>
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
                <Route path="/login"  >
                    <Login />
                </Route>
                <Route path="/passwordvergeten">
                    <Passwordvergeten />
                </Route>
                {/*PAGE -------------------- */}
                <PrivateRoute path="/account" >
                     {/*TAB -------------------- */}
                </PrivateRoute>
            </Switch>
                  <div  className="parkingAdam-header">
                      <Navigation />
                  </div>
                  <div >
                       <Content1 /><Amsterdam/>
                  </div>
                  <div className="parkingAdam-container">
                      <ContentFooter/>
                  </div>
        </Router>
      </nav>
    </>
  );
}
export default App
