import React from 'react';
import '../../App.css';
import Tile from "../../components/tile/Tile";
import ParkingLocationZuid from "../../components/tab/ParkingLocationZuid";
import LocationDetailsZuid from "../../components/tab/LocationDetailsZuid";


function ParkingZuid() {
    return (
        <>
            <div id="zuid"><h2>Amsterdam Zuid Parkeergarages | Parkeerplaats VRIJ ?| Locatie gegevens</h2>
                <div id="tilebox">
                    <Tile/>
                    <Tile/>
                    <Tile children={<ParkingLocationZuid />}/>
                    <Tile children={<LocationDetailsZuid />}/>
                </div>
            </div>
        </>
    );
}
export default ParkingZuid;


