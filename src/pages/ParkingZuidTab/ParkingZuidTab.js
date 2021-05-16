import React from 'react';
import '../../App.css';
import Tile from "../../components/tile/Tile";
import LocationDetailsZuid from "../../components/tab/filter/LocationDetailsZuid";


function ParkingZuidTab() {
    return (
        <>
            <div id="zuid-details"><h2>Amsterdam Zuid Parkeergarages | Locatie gegevens</h2>
                <div id="tilebox-tab">
                    <Tile children={<LocationDetailsZuid />} />
                </div>
            </div>
        </>
    );
}
export default ParkingZuidTab;


