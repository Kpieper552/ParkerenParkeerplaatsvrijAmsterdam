import React from 'react';
import '../../App.css';
import Tile from "../../components/tile/Tile";
import LocationDetailsFiets from "../../components/tab/filter/LocationDetailsFiets";

function FietsParkeerPlekTab() {
    return (
        <>
            <div id="fiets-details"><h2>Fiets Parkeerplekken | Locatie gegevens</h2>
                <div id="tilebox">
                    <Tile children={<LocationDetailsFiets />} />
                </div>
            </div>

        </>
    );
}
export default FietsParkeerPlekTab;


