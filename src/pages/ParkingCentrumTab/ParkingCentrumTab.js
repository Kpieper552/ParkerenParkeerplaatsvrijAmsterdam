import React from 'react';
import '../ParkingCentrumTab/ParkingCentrumTab.css';
import Tile from "../../components/tile/Tile";
import LocationDetailsCentrum from "../../components/tab/filterparking/LocationDetailsCentrum";


function ParkingCentrumTab() {

    return (
        <>
            <div id="centrum-location-details"><h2>Amsterdam Centrum & Noord Parkeergarages | Locatie gegevens</h2>
                <div id="tilebox">
                <Tile children={<LocationDetailsCentrum />} />
                </div>
            </div>
        </>
    );
}
export default ParkingCentrumTab;


