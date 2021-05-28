import React from 'react';
import '../../App.css';
import ParkingLocationItemNameA from "../tab/parkinglocationplacesfree/ParkingLocationItemNameA";
import ParkingLocationItemNameB from "../tab/parkinglocationplacesfree/ParkingLocationItemNameB";
import ParkingLocationItemNameC from "../tab/parkinglocationplacesfree/ParkingLocationItemNameC";




function ContentPage() {

    return (
        <>
            <div id="parkingAdam-content-deel"><br/>
                <h3>PARKEREN AMSTERDAM PER LOCATIE</h3>
                <div id="parkingAdam-content-deel"><br/>
                <h4>
                    | TIP 1 | "Dagje winkelen in Amsterdam?" |-> Check Parkeerplaats VRIJ<br/><br/>
                <ParkingLocationItemNameA/><br/>
                </h4>
                <br/><br/>
                    <h4>
                        | TIP 2 | "Zakelijke lunchafspraak?"  |-> Check Parkeerplaats VRIJ<br/><br/>
                        <ParkingLocationItemNameB/><br/>
                    </h4>
                    <br/><br/>
                    <h4>
                        | TIP 3 |"Dagje uit met de kleinkinderen?" |-> Check Parkeerplaats VRIJ<br/><br/>
                        <ParkingLocationItemNameC/>
                    </h4>
                    <br/><br/>
                </div>
            </div>
        </>
    );
}
export default ContentPage;

