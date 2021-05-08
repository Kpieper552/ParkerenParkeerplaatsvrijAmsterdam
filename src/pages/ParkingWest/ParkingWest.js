import React from 'react';
import '../../App.css';
import Tile from "../../components/tile/Tile";
import LocationDetailsWest from "../../components/tab/LocationDetailsWest";
import ParkingLocationWest from "../../components/tab/ParkingLocationWest";


function ParkingWest() {
    return (
        <>
            <div id="west"><h2>Amsterdam West Parkeergarages | Parkeerplaats VRIJ ?| Locatie gegevens</h2>
                <div id="tilebox">
                    <Tile/>
                    <Tile/>
                    <Tile children={<ParkingLocationWest/>}/>
                    <Tile children={<LocationDetailsWest/>}/>
                </div>
            </div>
        </>
    );
}
export default ParkingWest;


