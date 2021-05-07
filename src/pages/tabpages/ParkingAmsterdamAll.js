import React from 'react';
import '../../App.css';

import Tile from "../../components/tile/Tile";
import ParkingLocationItem from "../../components/tab/ParkingLocationItem";
import ParkingLocationDetails from "../../components/tab/ParkingLocationDetails";





function ParkingAmsterdamAll() {

    return (
        <>
            <div id="centrum"><h2>Amsterdam Parkeergarages | Parkeerplaats VRIJ ? | Locatie gegevens</h2>
                <div id="tilebox">
                    <Tile/>
                    <Tile/>

                </div>
            </div>
        </>
    );
}
export default ParkingAmsterdamAll;


//               <Tile><ParkingLocationDetails/></Tile>
//                     <Tile><ParkingLocationItem/></Tile>