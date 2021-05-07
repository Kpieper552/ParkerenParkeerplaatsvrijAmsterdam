import React from 'react';
import '../../App.css';
import ParkingLocationMap from "../../components/tab/ParkingLocationMap";
import Tile from "../../components/tile/Tile";



function ParkingMapAmsterdam() {
    return (
        <>
            <div id="zuid"><h2>Amsterdam Parkeergarages | Parkeerplaatsen VRIJ op kaart</h2>

                <div id="tilebox">
                    <Tile>
                        <ParkingLocationMap />
                    </Tile>

                </div>
            </div>

        </>
    );
}
export default ParkingMapAmsterdam;


