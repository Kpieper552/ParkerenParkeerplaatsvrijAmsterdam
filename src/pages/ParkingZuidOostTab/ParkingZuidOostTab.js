import React from 'react';
import '../../App.css';
import Tile from "../../components/tile/Tile";
import LocationDetailsZuidOost from "../../components/tab/filter/LocationDetailsZuidOost";

function ParkingZuidOostTab() {
    return (
        <>
            <div id="zuidoost-details"> <h2>Amsterdam Zuid-Oost Parkeergarages | Locatie gegevens</h2>
                <div id="tilebox">
                    <Tile children={<LocationDetailsZuidOost />} />
                </div>
            </div>
        </>
    );
}
export default ParkingZuidOostTab;


