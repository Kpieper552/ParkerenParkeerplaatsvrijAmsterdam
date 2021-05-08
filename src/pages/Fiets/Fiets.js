import React from 'react';
import '../../App.css';
import Tile from "../../components/tile/Tile";
import ParkingLocationFiets from "../../components/tab/ParkingLocationFiets";
import LocationDetailsFiets from "../../components/tab/LocationDetailsFiets";

function Fiets() {

    return (
        <>
            <div id="fiets"><h2>Fiets Parkeerplekken | Parkeerplek VRIJ ?| Locatie gegevens</h2>
                <div id="tilebox">
                <Tile/>
                <Tile/>
                    <Tile children={<ParkingLocationFiets />}/>
                    <Tile children={<LocationDetailsFiets />}/>
                </div>
            </div>

        </>
    );
}
export default Fiets;


