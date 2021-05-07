import React from 'react';
import '../../App.css';
import ParkingLocationCentrum from "../../components/tab/ParkingLocationCentrum";
import Tile from "../../components/tile/Tile";





function ParkingCentrum() {

    return (
        <>
            <div id="centrum"><h2>Amsterdam Centrum Parkeergarages | Parkeerplaats VRIJ ? | Locatie gegevens</h2>
                <div id="tilebox">

                   <Tile ><ParkingLocationCentrum /></Tile>
                </div>
            </div>
        </>
    );
}
export default ParkingCentrum;


