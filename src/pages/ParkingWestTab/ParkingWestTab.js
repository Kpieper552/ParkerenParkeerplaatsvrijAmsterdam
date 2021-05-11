import React from 'react';
import '../../App.css';
import Tile from "../../components/tile/Tile";
import LocationDetailsWest from "../../components/tab/filter/LocationDetailsWest";


function ParkingWestTab() {
    return (
        <>
            <div id="west-details"><h2>Amsterdam West Parkeergarages | Parkeerplaats VRIJ ?| Locatie gegevens</h2>
                <div id="tilebox">
                    <Tile children={<LocationDetailsWest/>} />
                </div>
            </div>
        </>
    );
}
export default ParkingWestTab;


