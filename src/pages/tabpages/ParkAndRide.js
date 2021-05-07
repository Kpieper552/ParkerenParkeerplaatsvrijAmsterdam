import React from 'react';
import '../../App.css';
import ParkingLocationParkAndRide from "../../components/tab/ParkingLocationParkAndRide";
import LocationDetailsParkAndRide from "../../components/tab/LocationDetailsParkAndRide";
import Tile from "../../components/tile/Tile";





function ParkAndRide() {

    return (
        <>
            <div id="penr"><h2>Amsterdam Park and Ride | Parkeerplaats VRIJ ?| Locatie gegevens</h2>
                <div id="tilebox">
                    <Tile/>
                    <Tile/>
                    <Tile ><ParkingLocationParkAndRide /></Tile>
                    <Tile ><LocationDetailsParkAndRide /></Tile>


                </div>
            </div>


        </>
    );
}
export default ParkAndRide;

