import React  from 'react';
import '../../App.css';
import Tile from "../../components/tile/Tile";
import amsterdam from "../../assets/amsterdam.JPG";
import carparking from "../../assets/carparking.jpg";
import ParkingLocationFiets from "../../components/tab/ParkingLocationFiets";
import ParkingLocationItem from "../../components/tab/ParkingLocationItem";



function ParkingPlaatsenVrijTab() {
    return (
        <>
            <div>
                <div>
                    <Tile img={carparking} imgDescription={carparking}/>
                     <Tile>
                        <div id="parkingAdam-weg">informatie<br/><br/>

                              <ParkingLocationItem/>
                              informatie<br/><br/>
                        </div>
                    </Tile>
                </div>
            </div>
        </>
    );
}
export default ParkingPlaatsenVrijTab;