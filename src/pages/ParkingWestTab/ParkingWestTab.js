import React from 'react';
import '../ParkingWestTab/ParkingWestTab.css';
import Tile from "../../components/tile/Tile";
import LocationDetailsWest from "../../components/tab/filterparking/LocationDetailsWest";


function ParkingWestTab() {
    return (
        <>
            <div id="west-location-details"><h2>Amsterdam West Parkeergarages | Locatie gegevens</h2>
                <div id="tilebox">
                    <Tile children={<LocationDetailsWest/>} />
                </div>
            </div>
        </>
    );
}
export default ParkingWestTab;


