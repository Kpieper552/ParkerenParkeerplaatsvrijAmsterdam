import React from 'react';
import '../../App.css';
import Tile from "../../components/tile/Tile";
import ParkingLocationWest from "../../components/tab/filter/ParkingLocationWest";
import ParkingLocationZuid from "../../components/tab/filter/ParkingLocationZuid";
import carparking from "../../assets/carparking.jpg";
import {NavLink} from "react-router-dom";


function ParkerenAmsterdamStadsdelenZuidWest() {
    return (
        <>
            <div ><h3>Parkeren Amsterdam Zuid en West </h3>
                <Tile img={carparking} imgDescription={carparking}/>
                <Tile titlearea={"Plaatsen VRIJ"}/>
                <div id="tilebox">
                    <Tile>
                        <div id="parkingAdam-weg-deel"><br/>
                            <ParkingLocationZuid/>
                            <NavLink to="/"> |> Home</NavLink><br/>
                        </div><br/>
                        <div id="parkingAdam-weg">
                            <div className="label-weg">parkeren in Zuid</div>
                            <div className="label-weg">parkeren in West</div>
                            <div className="label-weg"></div>
                            <br/>
                        </div><br/>
                        <div id="parkingAdam-weg-deel"><br/><br/>
                            <ParkingLocationWest/>
                            <NavLink to="/"> |> Home</NavLink><br/>
                        </div>
                    </Tile>
                </div>
        </div>
     </>
   );
}
export default ParkerenAmsterdamStadsdelenZuidWest;

