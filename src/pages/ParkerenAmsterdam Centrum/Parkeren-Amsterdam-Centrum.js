import React from 'react';
import '../../App.css';
import Tile from "../../components/tile/Tile";
import ParkingLocationCentrum from "../../components/tab/filter/ParkingLocationCentrum";
import ParkingLocationCentrumPart from "../../components/tab/filter/ParkingLocationCentrumPart";
import carparking from "../../assets/carparking.jpg";
import {NavLink} from "react-router-dom";


function ParkerenAmsterdamCentrum() {
    return (
        <>
            <div ><h1>Parkeren Centrum en Noord</h1>
                <Tile img={carparking} imgDescription={carparking}/>
                <Tile titlearea={"Plaatsen VRIJ"}/>
                <div id="tilebox">
                    <Tile>
                        <div id="parkingAdam-weg-deel">
                            <br/><br/><ParkingLocationCentrumPart/>
                            <NavLink to="/"> |> Home</NavLink><br/>
                        </div><br/>
                        <div id="parkingAdam-weg">
                            <div className="label-weg">parkeren in centrum </div>
                            <div className="label-weg">parkeren in noord</div>

                            <br/>
                        </div><br/>
                        <div id="parkingAdam-weg-deel">
                            <br/><br/><ParkingLocationCentrum/>
                            <NavLink to="/"> |> Home</NavLink><br/>
                        </div>
                    </Tile>
                </div>
            </div>
        </>
    );
}
export default ParkerenAmsterdamCentrum;