import React from 'react';
import '../../App.css';
import Tile from "../../components/tile/Tile";
import ParkingLocationParkAndRide from "../../components/tab/filter/ParkingLocationParkAndRide";
import carparking from "../../assets/carparking.jpg";
import ParkingLocationParkAndRidePart from "../../components/tab/filter/ParkingLocationParkandRidePart";
import {NavLink} from "react-router-dom";





function ParkerenAmsterdamParkenRide() {
    return (
        <>
            <div ><h1>Parkeren Park & Ride </h1>
                <Tile img={carparking} imgDescription={carparking}/>
                <Tile titlearea={"Plaasten VRIJ "}/>
                <div id="tilebox">
                    <Tile>
                        <div id="parkingAdam-weg-deel"> <br/><br/>
                            <ParkingLocationParkAndRide/>
                            <NavLink to="/"> |> Home</NavLink><br/>
                        </div><br/>
                        <div id="pr-Page-weg">
                            <div className="label-weg">Park & Ride Amsterdam</div><br/>
                            <div className="label-weg">+ Voordelig OV naar het Centrum</div><br/>
                        </div>
                        <div id="parkingAdam-weg-deel"> <br/><br/>
                            <ParkingLocationParkAndRidePart/>
                            <NavLink to="/"> |> Home</NavLink><br/>
                        </div>
                    </Tile>
                </div>
            </div>
        </>
    );
}
export default ParkerenAmsterdamParkenRide;