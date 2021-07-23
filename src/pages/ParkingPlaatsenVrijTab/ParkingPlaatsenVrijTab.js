import React  from 'react';
import '../ParkingPlaatsenVrijTab/ParkingPlaatsenVrijTab.css';
import Tile from "../../components/tile/Tile";
import ParkingLocationItemFreeShort from "../../components/tab/parkinglocationplacesfree/ParkingLocationItemFreeShort";



function ParkingPlaatsenVrijTab() {
    return (
        <>
            <div>
                <div>
                     <Tile>
                        <div id="parkingAdam-weg">
                              <ParkingLocationItemFreeShort/>
                              <br/><br/>
                        </div>
                    </Tile>
                </div>
            </div>
        </>
    );
}
export default ParkingPlaatsenVrijTab;