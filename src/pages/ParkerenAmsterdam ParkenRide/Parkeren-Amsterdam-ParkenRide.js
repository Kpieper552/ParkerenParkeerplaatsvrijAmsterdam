import React from 'react';
import '../../App.css';
import Tile from "../../components/tile/Tile";
import ParkingLocationParkAndRide from "../../components/tab/filter/ParkingLocationParkAndRide";
import carparking from "../../assets/carparking.jpg";
import amsterdam from "../../assets/amsterdam.JPG.png";
import ParkingLocationParkAndRidePart from "../../components/tab/filter/ParkingLocationParkandRidePart";
import {NavLink} from "react-router-dom";





function ParkerenAmsterdamParkenRide() {
    return (
        <>
            <Tile img={amsterdam} imgDescription={amsterdam}/>
            <div ><h1>Parkeren Park & Ride </h1>
                <Tile img={carparking} imgDescription={carparking}/>
                <Tile titlearea={"Park & Ride Plaasten vrij "}/>
                <Tile imgDescription={<span>"-"</span>}/>
                <Tile imgDescription={<span>"-"</span>}/>
                <div id="tilebox">
                    <Tile>
                        <div id="parkingAdam-weg-deel"> <br/><br/>
                            <ParkingLocationParkAndRide/>
                            <NavLink to="/"> |> Home</NavLink><br/>
                        </div><br/>
                        <div id="pr-Page-weg">
                            <div className="label-weg">Parkeren in Amsterdam</div><br/>
                            <div className="label-weg">Parkeren in Amsterdam</div><br/>
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