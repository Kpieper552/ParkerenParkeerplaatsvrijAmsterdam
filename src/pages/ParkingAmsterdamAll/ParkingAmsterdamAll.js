import React from 'react';
import '../../App.css';
import Tile from "../../components/tile/Tile";
import ParkingLocationDetails from "../../components/tab/ParkingLocationDetails";






function ParkingAmsterdamAll() {

    return (
        <>
            <div id="locationFree"><h2>Amsterdam Parkeergarages | Parkeerplaats VRIJ ?| Locatie gegevens</h2>
                <div id="tilebox">
                    <Tile children={<ParkingLocationDetails />}/>
                </div>
            </div>
        </>
    );
}
export default ParkingAmsterdamAll;

//<Tile children={<ParkingLocationItem />}/>
