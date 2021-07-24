import React from 'react';
import '../ParkerenAmsterdam StadsdelenOostZuidOoost/Parkeren-Amsterdam-Stadsdelen-Oost-ZuidOost.css';
import Tile from "../../components/tile/Tile";
import ParkingLocationZuidOost from "../../components/tab/filterparking/ParkingLocationZuidOost";
import ParkingLocationOost from "../../components/tab/filterparking/ParkingLocationOost";
import carparking from "../../assets/carparking.jpg";
import {NavLink} from "react-router-dom";
import ContentSubPage from "../../components/content/ContentSubPage";



function ParkerenAmsterdamStadsdelenOostZuidOost() {
    return (
        <>
            <div ><h3>Parkeren Amsterdam Zuid-Oost en Oost</h3>
                <Tile img={carparking} imgDescription={carparking}/>
                <Tile titlearea={"Parkeerplaatsen VRIJ"}/>
                <div id="tilebox">
                    <Tile>
                        <div id="parkingAdam-weg">
                            <br/><br/><ParkingLocationZuidOost/>
                            <NavLink to="/home"> |> Home</NavLink><br/>
                        </div><br/>
                        <div id="parkingAdam-weg">
                            <div><ContentSubPage/></div>
                            <br/>
                        </div>
                        <div id="parkingAdam-weg">
                            <br/><br/><ParkingLocationOost/>
                            <NavLink to="/home"> |> Home</NavLink><br/>
                        </div>
                    </Tile>
                </div>
            </div>
        </>
    );
}
export default ParkerenAmsterdamStadsdelenOostZuidOost;