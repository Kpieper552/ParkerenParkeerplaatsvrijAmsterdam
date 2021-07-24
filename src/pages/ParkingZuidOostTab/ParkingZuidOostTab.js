import React from 'react';
import '../ParkingZuidOostTab/ParkingZuidOostTab.css';
import Tile from "../../components/tile/Tile";
import LocationDetailsZuidOost from "../../components/tab/filterparking/LocationDetailsZuidOost";

function ParkingZuidOostTab() {
    return (
        <>
            <div id="zuidoost-location-details"> <h2>Amsterdam Zuid-Oost Parkeergarages | Locatie gegevens</h2>
                <div id="tilebox">
                    <Tile children={<LocationDetailsZuidOost />} />
                </div>
            </div>
        </>
    );
}
export default ParkingZuidOostTab;


