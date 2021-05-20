import React  from 'react';
import '../../App.css';
import Tile from "../../components/tile/Tile";
import carparking from "../../assets/carparking.jpg";
import { NavLink } from 'react-router-dom';

function Home() {
    return (
        <>
            <div><h1>Parkeren Amsterdam</h1></div>
                <Tile img={carparking} imgDescription={carparking}/>
                <Tile titlearea={"PARKEREN AMSTERDAM "}/>
                <Tile>
                     <div id="parkingAdam-weg-deel">
                         <div className="label-weg">
                             Parkeerplaatsen<br/>
                             |> VRIJ  |> Actueel beschikbaar<br/>
                             |> Locatie informatie
                         </div>
                         <NavLink to="/parkeren-amsterdam-centrum" id="button-page"><h3>|>Locaties Centrum</h3></NavLink>
                         <NavLink to="/parkeren-amsterdam-Stadsdelen-Oost-ZuidOost" id="button-page"><h3>|>Locaties Oost</h3></NavLink>
                         <NavLink to="/parkeren-amsterdam-Stadsdelen-Zuid-West" id="button-page"><h3>|>Locaties West</h3></NavLink>
                         <div id="LocationFree">
                         </div>
                     </div>
                    <div id="home-Page-weg">
                        <div className="label-weg">
                            <br/>
                            |>Parkeren in Amsterdam<br/>
                            |>per Stadsdeel
                        </div>
                    </div>
                     <div id="parkingAdam-weg-deel">
                         <div className="label-weg">
                             Parkeerplaatsen<br/>
                             |> VRIJ |> Actueel beschikbaar <br/>
                             |> Locatie informatie
                         </div>
                         <NavLink to="/parkeren-amsterdam-centrum" id="button-page"><h3>|>Locaties Noord</h3></NavLink>
                         <NavLink to="/parkeren-amsterdam-Stadsdelen-Zuid-West" id="button-page"><h3>|>Locaties Zuid</h3></NavLink>
                         <NavLink to="/parkeren-amsterdam-Stadsdelen-Oost-ZuidOost" id="button-page"><h3>|>Locaties Zuid-Oost</h3></NavLink>
                         <div id="LocationFree">
                         </div>
                    </div>
                </Tile>
            <Tile img={carparking} imgDescription={carparking}/>
        </>
    );
}
export default Home;