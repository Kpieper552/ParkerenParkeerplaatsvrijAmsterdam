import React from 'react';
import '../../App.css';
import Tile from "../../components/tile/Tile";
import ParkingLocationOost from "../../components/tab/ParkingLocationOost";
import LocationDetailsOost from "../../components/tab/LocationDetailsOost";


function ParkingOost() {
    return (
        <>
            <div id="oost"><h2>Amsterdam Oost Parkeergarages | Parkeerplaats VRIJ ? | Locatie gegevens</h2>
                <div id="tilebox">
                    <Tile/>
                    <Tile/>
                    <Tile children={<ParkingLocationOost/>}/>
                    <Tile children={<LocationDetailsOost/>}/>
                </div>
            </div>
        </>
    );
}
export default ParkingOost;


