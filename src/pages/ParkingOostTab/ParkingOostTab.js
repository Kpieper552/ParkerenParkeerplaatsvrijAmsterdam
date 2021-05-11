import React from 'react';
import '../../App.css';
import Tile from "../../components/tile/Tile";
import LocationDetailsOost from "../../components/tab/filter/LocationDetailsOost";


function ParkingOostTab() {
    return (
        <>
            <div id="oost-details"><h2>Amsterdam Oost Parkeergarages | Locatie gegevens</h2>
                <div id="tilebox">
                    <Tile children={<LocationDetailsOost/>} />
                </div>
            </div>
        </>
    );
}
export default ParkingOostTab;


