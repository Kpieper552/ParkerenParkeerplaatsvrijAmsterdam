import React from 'react';
import '../../App.css';
import Tile from "../../components/tile/Tile";
import ParkingLocationZuidOost from "../../components/tab/ParkingLocationZuidOost";
import LocationDetailsZuidOost from "../../components/tab/LocationDetailsZuidOost";



function ParkingZuidOost() {

    return (
        <>
            <div id="zuidoost"> <h2>Amsterdam Zuid-Oost Parkeergarages | Parkeerplaats VRIJ ?| Locatie gegevens</h2>
                <div id="tilebox">
                    <Tile/>
                    <Tile/>
                    <Tile><ParkingLocationZuidOost /></Tile>
                    <Tile><LocationDetailsZuidOost /></Tile>
                </div>
            </div>
        </>
    );
}
export default ParkingZuidOost;


