import React  from 'react';
import '../../App.css';
import Tile from "../../components/tile/Tile";
import carparking from "../../assets/carparking.jpg";
import ParkingLocationItem from "../../components/tab/parkinglocationplacesfree/ParkingLocationItem";



function ParkingPlaatsenVrijTab() {
    return (
        <>
            <div>
                <div>
                     <Tile>
                        <div id="parkingAdam-weg-deel">
                              <ParkingLocationItem/>
                              <br/><br/>
                        </div>
                    </Tile>
                </div>
            </div>
        </>
    );
}
export default ParkingPlaatsenVrijTab;