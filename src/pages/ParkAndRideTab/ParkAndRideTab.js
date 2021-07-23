import React from 'react';
import '../ParkAndRideTab/ParkAndRideTab.css';
import LocationDetailsParkAndRide from "../../components/tab/filterparking/LocationDetailsParkAndRide";
import Tile from "../../components/tile/Tile";


function ParkAndRideTab() {
    return (
        <>
            <div id="penr-location-details"><h2>Amsterdam Park and Ride | Locatie gegevens</h2>
                <div id="tilebox">
                    <Tile children={<LocationDetailsParkAndRide/>} />
                </div>
            </div>
        </>
    );
}
export default ParkAndRideTab;

