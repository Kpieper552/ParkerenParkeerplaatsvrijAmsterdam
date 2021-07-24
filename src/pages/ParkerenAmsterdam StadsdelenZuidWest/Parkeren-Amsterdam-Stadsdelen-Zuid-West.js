import React from 'react';
import '../ParkerenAmsterdam StadsdelenZuidWest/Parkeren-Amsterdam-Stadsdelen-Zuid-West.css';
import Tile from "../../components/tile/Tile";
import ParkingLocationWest from "../../components/tab/filterparking/ParkingLocationWest";
import ParkingLocationZuid from "../../components/tab/filterparking/ParkingLocationZuid";
import carparking from "../../assets/carparking.jpg";
import {NavLink} from "react-router-dom";
import ContentSubPage from "../../components/content/ContentSubPage";



function ParkerenAmsterdamStadsdelenZuidWest() {
    return (
        <>
            <div ><h3>Parkeren Amsterdam Zuid en West </h3>
                <Tile img={carparking} imgDescription={carparking}/>
                <Tile titlearea={"Parkeerplaatsen VRIJ"}/>
                <div id="tilebox">
                    <Tile>
                        <div id="parkingAdam-weg">
                            <ParkingLocationZuid/>
                            <NavLink to="/home"> |> Home</NavLink><br/>
                        </div><br/>
                        <div id="parkingAdam-weg">
                            <div><ContentSubPage/></div>
                            <br/>
                        </div><br/>
                        <div id="parkingAdam-weg">
                            <ParkingLocationWest/>
                            <NavLink to="/home"> |> Home</NavLink><br/>
                        </div>
                    </Tile>
                </div>
        </div>
     </>
   );
}
export default ParkerenAmsterdamStadsdelenZuidWest;

