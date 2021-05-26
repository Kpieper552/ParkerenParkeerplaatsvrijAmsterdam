import React from 'react';
import '../../App.css';
import ParkingLocationItemNameA from "../tab/parkinglocationplacesfree/ParkingLocationItemNameA";
import ParkingLocationItemNameB from "../tab/parkinglocationplacesfree/ParkingLocationItemNameB";
import ParkingLocationItemNameC from "../tab/parkinglocationplacesfree/ParkingLocationItemNameC";




function ContentPage() {

    return (
        <>
            <div id="parkingAdam-content-deel"><br/>
                <div>Parkeren Amsterdam op locatie<br/><br/>
                    | TIP 1 | "Dagje winkelen in Amsterdam?" |-> Check Parkeerplaats VRIJ<br/><br/>
                <ParkingLocationItemNameA/><br/>
                    | TIP 2 | "Zakelijke lunchafspraak?"  |-> Check Parkeerplaats VRIJ<br/><br/>
                <ParkingLocationItemNameB/><br/>
                    | TIP 3 |"Dagje uit met de kleinkinderen?" |-> Check Parkeerplaats VRIJ<br/><br/>
                <ParkingLocationItemNameC/></div>
            </div>
        </>
    );
}
export default ContentPage;

