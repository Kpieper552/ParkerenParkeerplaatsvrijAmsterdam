import React from 'react';
import '../../App.css';
import Tile from "../../components/tile/Tile";
import Content1 from "../../components/content/Content1";
import ParkingLocationCentrum from "../../components/tab/filter/ParkingLocationCentrum";
import ParkingLocationCentrumPart from "../../components/tab/filter/ParkingLocationCentrumPart";
import carparking from "../../assets/carparking.jpg";
import {NavLink} from "react-router-dom";


function ParkerenAmsterdamCentrum() {
    return (
        <>
            <div ><h3>Parkeren Amsterdam Centrum en Noord</h3>
                <Tile img={carparking} imgDescription={carparking}/>
                <Tile titlearea={"Plaatsen VRIJ"}/>
                <div id="tilebox">
                    <Tile>
                        <div id="parkingAdam-weg">
                            <ParkingLocationCentrumPart/>
                            <NavLink to="/home"> |> Home</NavLink><br/>
                        </div><br/>
                        <div id="parkingAdam-weg">
                            <div><Content1/></div>
                            <br/>
                        </div><br/>
                        <div id="parkingAdam-weg">
                            <ParkingLocationCentrum/>
                            <NavLink to="/home"> |> Home</NavLink><br/>
                        </div>
                    </Tile>
                </div>
            </div>
        </>
    );
}
export default ParkerenAmsterdamCentrum;