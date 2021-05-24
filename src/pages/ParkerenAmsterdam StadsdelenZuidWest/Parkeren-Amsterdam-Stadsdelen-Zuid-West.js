import React from 'react';
import '../../App.css';
import Tile from "../../components/tile/Tile";
import Content1 from "../../components/content/Content1";
import ParkingLocationWest from "../../components/tab/filter/ParkingLocationWest";
import ParkingLocationZuid from "../../components/tab/filter/ParkingLocationZuid";
import carparking from "../../assets/carparking.jpg";
import {NavLink} from "react-router-dom";


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
                            <div><Content1/></div>
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

