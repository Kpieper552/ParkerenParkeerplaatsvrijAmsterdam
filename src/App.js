import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route, NavLink,

} from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Sign-Up";
import Account from "./pages/Account";
import ParkerenAmsterdamStadsdelenOostZuidOost from "./pages/Parkeren-Amsterdam-Stadsdelen-Oost-ZuidOost";
import ParkerenAmsterdamCentrum from "./pages/Parkeren-Amsterdam-Centrum";
import ParkerenAmsterdamParkenRide from "./pages/Parkeren-Amsterdam-ParkenRide";
import ParkerenAmsterdamStadsdelenZuidWest from "./pages/Parkeren-Amsterdam-Stadsdelen-Zuid-West";
//apikey aanmaken in env!!!!
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
            {/*NAVIGATION-------------------- */}
          <nav >
        <Router>
            <div className="parkingAdam-header">
            <ul >
                <li>
                    <NavLink to="/"><button>Home</button></NavLink>
                </li>
                <li>
                    <NavLink to="/parkeren-amsterdam-centrum" activeClassName="activelink"><button>Parkeren Centrum</button></NavLink>
                </li>
                <li>
                    <NavLink to="/parkeren-amsterdam-parkenride" activeClassName="activelink"><button>Park and Ride</button></NavLink>
                </li>
                <li>
                    <NavLink to="/parkeren-amsterdam-stadsdelen-Oost-ZuidOost" activeClassName="activelink"><button>Parkeren in Zuid-Oost/Oost</button></NavLink>
                </li>
                <li>
                    <NavLink to="/parkeren-amsterdam-stadsdelen-Zuid-West" activeClassName="activelink"><button>Parkeren in Zuid/West</button></NavLink>
                </li>
                <li>
                    <NavLink to="/login" activeClassName="activelink"><button>Login</button></NavLink>
                </li>
                <li>
                    <NavLink to="/account" activeClassName="activelink"><button>Account</button></NavLink>
                </li>
                <li>
                    <NavLink to="/sign-up" activeClassName="activelink"><button>Registreer</button></NavLink>
                </li>

            </ul>
            </div>
            {/*PAGES -------------------- */}
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/parkeren-amsterdam-stadsdelen-Oost-ZuidOost">
                    <ParkerenAmsterdamStadsdelenOostZuidOost />
                </Route>
                <Route path="/parkeren-amsterdam-stadsdelen-Zuid-West">
                    <ParkerenAmsterdamStadsdelenZuidWest />
                </Route>
                <Route path="/parkeren-amsterdam-centrum">
                    <ParkerenAmsterdamCentrum />
                </Route>
                <Route path="/parkeren-amsterdam-parkenride">
                    <ParkerenAmsterdamParkenRide />
                </Route>
                <Route path="/sign-up">
                    <SignUp />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
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
