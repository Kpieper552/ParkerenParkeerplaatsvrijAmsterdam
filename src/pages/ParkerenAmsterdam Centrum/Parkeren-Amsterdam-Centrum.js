import React from 'react';
import '../ParkerenAmsterdam Centrum/Parkeren-Amsterdam-Centrum.css';
import Tile from "../../components/tile/Tile";
import ParkingLocationCentrum from "../../components/tab/filterparking/ParkingLocationCentrum";
import ParkingLocationCentrumPart from "../../components/tab/filterparking/ParkingLocationCentrumPart";
import carparking from "../../assets/carparking.jpg";
import {NavLink} from "react-router-dom";
import ContentSubPage from "../../components/content/ContentSubPage";



function ParkerenAmsterdamCentrum() {
    return (
        <>
            <div ><h3>Parkeren Amsterdam Centrum en Noord</h3>
                <Tile img={carparking} imgDescription={carparking}/>
                <Tile titlearea={"Parkeerplaatsen VRIJ"}/>
                <div id="tilebox">
                    <Tile>
                        <div id="parkingAdam-weg">
                            <ParkingLocationCentrumPart/>
                            <NavLink to="/home"> |> Home</NavLink><br/>
                        </div><br/>
                        <div id="parkingAdam-weg">
                            <div><ContentSubPage/></div>
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