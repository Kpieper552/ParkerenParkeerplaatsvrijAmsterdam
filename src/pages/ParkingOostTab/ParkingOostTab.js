import React from 'react';
import '../ParkingOostTab/ParkingOostTab.css';
import Tile from "../../components/tile/Tile";
import LocationDetailsOost from "../../components/tab/filterparking/LocationDetailsOost";


function ParkingOostTab() {
    return (
        <>
            <div id="oost-location-details"><h2>Amsterdam Oost Parkeergarages | Locatie gegevens</h2>
                <div id="tilebox">
                    <Tile children={<LocationDetailsOost/>} />
                </div>
            </div>
        </>
    );
}
export default ParkingOostTab;


