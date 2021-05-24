import React  from 'react';
import '../../App.css';
import Tile from "../../components/tile/Tile";
import carparking from "../../assets/carparking.jpg";
import Content1 from "../../components/content/Content1";
import { NavLink } from 'react-router-dom';

function Home() {
    return (
        <>
            <div><h3>Parkeren Amsterdam</h3></div>
                <Tile img={carparking} imgDescription={carparking}/>
                <Tile titlearea={"KORT PARKEREN PER STADSDEEL "}/>
                <Tile>
                     <div id="home-Page-weg">
                         <div className="label-weg">
                         </div>
                         <NavLink to="/parkeren-amsterdam-centrum" id="button-page"><h4>|>Locaties Centrum</h4></NavLink>
                         <NavLink to="/parkeren-amsterdam-Stadsdelen-Oost-ZuidOost" id="button-page"><h4>|>Locaties Oost</h4></NavLink>
                         <NavLink to="/parkeren-amsterdam-Stadsdelen-Zuid-West" id="button-page"><h4>|>Locaties West</h4></NavLink>
                         <div id="LocationFree">
                         </div>
                     </div>
                    <div id="home-Page-weg">
                        <div>
                            <Content1/>
                        </div>
                    </div>
                     <div id="home-Page-weg">
                         <div className="label-weg">
                         </div>
                         <NavLink to="/parkeren-amsterdam-centrum" id="button-page"><h4>|>Locaties Noord</h4></NavLink>
                         <NavLink to="/parkeren-amsterdam-Stadsdelen-Zuid-West" id="button-page"><h4>|>Locaties Zuid</h4></NavLink>
                         <NavLink to="/parkeren-amsterdam-Stadsdelen-Oost-ZuidOost" id="button-page"><h4>|>Locaties Zuid-Oost</h4></NavLink>
                         <div id="LocationFree">
                         </div>
                    </div>
                </Tile>
            <Tile />
        </>
    );
}
export default Home;