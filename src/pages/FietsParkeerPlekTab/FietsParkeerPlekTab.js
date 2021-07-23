import React from 'react';
import '../FietsParkeerPlekTab/FietsParkeerPlek.css';
import Tile from "../../components/tile/Tile";
import LocationDetailsFiets from "../../components/tab/filterparking/LocationDetailsFiets";

function FietsParkeerPlekTab() {
    return (
        <>
            <div id="fiets-location-details"><h2>Fiets Parkeerplekken | Locatie gegevens</h2>
                <div id="tilebox">
                    <Tile children={<LocationDetailsFiets />} />
                </div>
            </div>
        </>
    );
}
export default FietsParkeerPlekTab;


