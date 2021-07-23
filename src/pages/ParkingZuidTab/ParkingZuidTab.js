import React from 'react';
import '../ParkingZuidTab/ParkingZuidTab.css';
import Tile from "../../components/tile/Tile";
import LocationDetailsZuid from "../../components/tab/filterparking/LocationDetailsZuid";


function ParkingZuidTab() {
    return (
        <>
            <div id="zuid-location-details"><h2>Amsterdam Zuid Parkeergarages | Locatie gegevens</h2>
                <div id="tilebox">
                    <Tile children={<LocationDetailsZuid />} />
                </div>
            </div>
        </>
    );
}
export default ParkingZuidTab;


