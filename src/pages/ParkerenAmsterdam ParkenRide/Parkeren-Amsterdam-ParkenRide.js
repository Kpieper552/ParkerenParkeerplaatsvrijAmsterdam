import React from 'react';
import '../ParkerenAmsterdam ParkenRide/Parkeren-Amsterdam-ParkenRide.css';
import Tile from "../../components/tile/Tile";
import ParkingLocationParkAndRide from "../../components/tab/filterparking/ParkingLocationParkAndRide";
import carparking from "../../assets/carparking.jpg";
import ParkingLocationParkAndRidePart from "../../components/tab/filterparking/ParkingLocationParkandRidePart";
import {NavLink} from "react-router-dom";
import ContentSubPage from "../../components/content/ContentSubPage";




function ParkerenAmsterdamParkenRide() {
    return (
        <>
            <div ><h3>Parkeren Amsterdam Park & Ride </h3>
                <Tile img={carparking} imgDescription={carparking}/>
                <Tile titlearea={"Parkeerplaasten VRIJ "}/>
                <div id="tilebox">
                    <Tile>
                        <div id="parkandridepage-weg"> <br/><br/>
                            <ParkingLocationParkAndRide/>
                            <NavLink to="/home"> |> Home</NavLink><br/>
                        </div><br/>
                        <div id="parkandridepage-weg">
                            <div><ContentSubPage/></div><br/>
                        </div>
                        <div id="parkandridepage-weg"> <br/><br/>
                            <ParkingLocationParkAndRidePart/>
                            <NavLink to="/home"> |> Home</NavLink><br/>
                        </div>
                    </Tile>
                </div>
            </div>
        </>
    );
}
export default ParkerenAmsterdamParkenRide;