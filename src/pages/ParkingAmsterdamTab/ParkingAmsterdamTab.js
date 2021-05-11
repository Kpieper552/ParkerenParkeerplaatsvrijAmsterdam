import React from 'react';
import '../../App.css';
import Tile from "../../components/tile/Tile";
import ParkingLocationDetails from "../../components/tab/ParkingLocationDetails";
import carparking from "../../assets/carparking.jpg";
import ParkingLocationItem from "../../components/tab/ParkingLocationItem";




function ParkingAmsterdamTab() {

    return (
        <>
               <div id="zuidoost-details"> <h2>Amsterdam  Parkeergarages | Locatie gegevens</h2>
                   <Tile img={carparking} imgDescription={carparking}/>
                   <Tile titlearea={"PARKEREN AMSTERDAM "}/>
                            <Tile children={<ParkingLocationDetails />} />

                </div>

        </>
    );
}
export default ParkingAmsterdamTab;


//                        <Tile img={kaart} imgDescription={kaart}/>