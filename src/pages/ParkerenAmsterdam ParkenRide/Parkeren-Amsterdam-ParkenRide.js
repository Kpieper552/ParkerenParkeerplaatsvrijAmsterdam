import React from 'react';
import '../../App.css';
import Tile from "../../components/tile/Tile";
import Content from "../../components/parking/Content";
import ParkingLocationParkAndRide from "../../components/tab/filter/ParkingLocationParkAndRide";
import carparking from "../../assets/carparking.jpg";
import ParkingLocationParkAndRidePart from "../../components/tab/filter/ParkingLocationParkandRidePart";
import {NavLink} from "react-router-dom";





function ParkerenAmsterdamParkenRide() {
    return (
        <>
            <div ><h3>Parkeren Amsterdam Park & Ride </h3>
                <Tile img={carparking} imgDescription={carparking}/>
                <Tile titlearea={"Plaasten VRIJ "}/>
                <div id="tilebox">
                    <Tile>
                        <div id="pr-Page-weg"> <br/><br/>
                            <ParkingLocationParkAndRide/>
                            <NavLink to="/home"> |> Home</NavLink><br/>
                        </div><br/>
                        <div id="pr-Page-weg">
                            <div><Content/></div><br/>
                        </div>
                        <div id="pr-Page-weg"> <br/><br/>
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