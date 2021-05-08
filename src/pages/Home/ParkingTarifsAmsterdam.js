import React from 'react';
import '../../App.css';
import Tile from "../../components/tile/Tile";
import ParkingTarifs from "../../components/tab/ParkingTarifs";


function ParkingTarifsAmsterdam() {
    return (
        <>
            <div id="zuid"><h2>Amsterdam Parkeergarages</h2>
                <div id="tilebox">
                    <Tile titlearea="Parkeren in Amsterdam"/>

                </div>
            </div>

        </>
    );
}
export default ParkingTarifsAmsterdam;


//             <Tile children={<ParkingTarifs/>}/>