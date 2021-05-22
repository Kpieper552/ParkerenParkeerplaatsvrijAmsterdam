import React from 'react';
import '../../App.css';
import Tile from "../../components/tile/Tile";
import Content1 from "../../components/content/Content1";
import ParkingLocationZuidOost from "../../components/tab/filter/ParkingLocationZuidOost";
import ParkingLocationOost from "../../components/tab/filter/ParkingLocationOost";
import carparking from "../../assets/carparking.jpg";
import {NavLink} from "react-router-dom";


function ParkerenAmsterdamStadsdelenOostZuidOost() {
    return (
        <>
            <div ><h3>Parkeren Amsterdam Zuid-Oost en Oost</h3>
                <Tile img={carparking} imgDescription={carparking}/>
                <Tile titlearea={"Plaatsen VRIJ"}/>
                <div id="tilebox">
                    <Tile>
                        <div id="parkingAdam-weg">
                            <br/><br/><ParkingLocationZuidOost/>
                            <NavLink to="/home"> |> Home</NavLink><br/>
                        </div><br/>
                        <div id="parkingAdam-weg">
                            <div><Content1/></div>
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