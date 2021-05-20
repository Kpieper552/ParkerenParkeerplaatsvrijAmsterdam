import React from 'react';
import '../../App.css';
import Tile from "../../components/tile/Tile";
import LocationDetailsCentrum from "../../components/tab/filter/LocationDetailsCentrum";


function ParkingCentrumTab() {

    return (
        <>
            <div id="centrum-details"><h2>Amsterdam Centrum & Noord Parkeergarages | Locatie gegevens</h2>
                <div id="tilebox">
                <Tile children={<LocationDetailsCentrum />} />
                </div>
            </div>
        </>
    );
}
export default ParkingCentrumTab;


