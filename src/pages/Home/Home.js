import React  from 'react';
import '../../App.css';
import Tile from "../../components/tile/Tile";
import carparking from "../../assets/carparking.jpg";
import amsterdam from "../../assets/amsterdam.JPG";
import ParkingLocationItemNameC from "../../components/tab/parkinglocationplacesfree/ParkingLocationItemNameC";
import ParkingLocationItemNameB from "../../components/tab/parkinglocationplacesfree/ParkingLocationItemNameB";
import ParkingLocationItemNameA from "../../components/tab/parkinglocationplacesfree/ParkingLocationItemNameA";
import {NavLink} from "react-router-dom";

function Home() {
    return (
        <>
            <Tile img={amsterdam} imgDescription={amsterdam}/>
            <div><h1>Parkeren Amsterdam</h1></div>
                <Tile img={carparking} imgDescription={carparking}/>
                <Tile titlearea={"PARKEREN AMSTERDAM "}/>
                <Tile>
                     <div id="parkingAdam-weg-deel">
                         <div className="label-weg">
                             Parkeren in Amsterdam<br/><br/>
                             De Route naar Parkeerplaats |> VRIJ <br/>
                             |>  Locatie informatie
                         </div>
                         <NavLink to="/parkeren-amsterdam-centrum" id="button-page"><h3>|>Locaties Centrum</h3></NavLink>
                         <NavLink to="/parkeren-amsterdam-StadsdelenOostZuidOost" id="button-page"><h3>|>Locaties Oost</h3></NavLink>
                         <NavLink to="/parkeren-amsterdam-StadsdelenZuidWest" id="button-page"><h3>|>Locaties West</h3></NavLink>
                         <div id="LocationFree">
                             Aanrijroutes Amsterdam<br/>
                             |>Zuid Westelijk <br/>
                             A9 vanuit Alkmaar <br/>
                             |> Westelijk <br/>
                             A7/A8 Hoorn/Zaanstad<br/>
                         </div>
                         <div className="label-weg">
                             |> Meer informatie  Parkeren |> in Amsterdam</div>
                         <NavLink to="/sign-up" id="button-page"><h3>|>Login / Registreer</h3></NavLink>
                     </div>
                    <div id="home-Page-weg">
                        <div className="label-weg">
                            <br/>|> Parkeren in Amsterdam<br/>
                            Parkeerplaats
                            |><ParkingLocationItemNameA/>
                        </div>
                        <div className="label-weg">
                            <br/>|> Parkeren in Amsterdam<br/>
                            Parkeerplaats
                            |><ParkingLocationItemNameB/>
                        </div>
                        <div className="label-weg">
                            <br/>|> Parkeren in Amsterdam<br/><br/>
                            Parkeerplaats
                            |><ParkingLocationItemNameC/>
                        </div>
                    </div>
                     <div id="parkingAdam-weg-deel">
                         <div className="label-weg">
                             Parkeren in Amsterdam<br/><br/>
                             De Route naar Parkeerplaats |> VRIJ <br/>
                             |>  Locatie informatie
                         </div>
                         <NavLink to="/parkeren-amsterdam-parkenride" id="button-page"><h3>|>Locaties Park & Ride</h3></NavLink>
                         <NavLink to="/parkeren-amsterdam-StadsdelenZuidWest" id="button-page"><h3>|>Locaties Zuid</h3></NavLink>
                         <NavLink to="/parkeren-amsterdam-StadsdelenOostZuidOost" id="button-page"><h3>|>Locaties Zuid-Oost</h3></NavLink>
                         <div id="LocationFree">
                             Aanrijroutes Amsterdam<br/>
                             |>Zuid Westelijk <br/>
                             A4/A5 Den Haag, Schiphol<br/>
                             A9 Alkmaar Haarlem<br/>
                             |>Zuid Oostelijk<br/>
                             A1 Amersfoort/Hilversum<br/>
                             A2 Utrecht<br/>
                         </div>
                         <div className="label-weg">
                             |> Informatie Parkeren |> in Amsterdam |> Plaatsen Vrij Lang parkeren</div>
                         <NavLink to="/sign-up" id="button-page"><h3>|>Lang parkeren in Amsterdam</h3></NavLink>
                    </div>
                </Tile>
            <Tile img={carparking} imgDescription={carparking}/>
        </>
    );
}
export default Home;