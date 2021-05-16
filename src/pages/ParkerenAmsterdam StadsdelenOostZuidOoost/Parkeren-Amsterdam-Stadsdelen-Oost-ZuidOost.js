import React from 'react';
import '../../App.css';
import Tile from "../../components/tile/Tile";
import ParkingLocationZuidOost from "../../components/tab/filter/ParkingLocationZuidOost";
import ParkingLocationOost from "../../components/tab/filter/ParkingLocationOost";
import carparking from "../../assets/carparking.jpg";
import amsterdam from "../../assets/amsterdam.JPG";
import {NavLink} from "react-router-dom";


function ParkerenAmsterdamStadsdelenOostZuidOost() {
    return (
        <>
            <Tile img={amsterdam} imgDescription={amsterdam}/>
            <div ><h1>Parkeren Amsterdam Zuid-Oost en Oost</h1>
                <Tile img={carparking} imgDescription={carparking}/>
                <Tile titlearea={"Plaatsen VRIJ"}/>
                <div id="tilebox">
                    <Tile>
                        <div id="parkingAdam-weg-deel">
                            <br/><br/>
                            <br/><br/><ParkingLocationZuidOost/>
                            <NavLink to="/"> |> Home</NavLink><br/>
                        </div><br/>
                        <div id="parkingAdam-weg">
                            <div className="label-weg">Parkeren in Zuid-Oost of Oost</div>
                            <div className="label-weg"></div>
                            <br/>
                        </div>
                        <div id="parkingAdam-weg-deel">
                            <br/><br/><ParkingLocationOost/>
                            <NavLink to="/"> |> Home</NavLink><br/>
                        </div>
                    </Tile>
                </div>
            </div>
        </>
    );
}
export default ParkerenAmsterdamStadsdelenOostZuidOost;