import React from 'react';
import '../content/Content.css';
import ParkingLocationItemNameA from "../tab/parkinglocationplacesfree/ParkingLocationItemNameA";
import ParkingLocationItemNameB from "../tab/parkinglocationplacesfree/ParkingLocationItemNameB";
import ParkingLocationItemNameC from "../tab/parkinglocationplacesfree/ParkingLocationItemNameC";
import ContentBox from "../contentbox/ContentBox";


function ContentPage() {

    return (
        <>
            <ContentBox subtitlecontentbox="PARKEREN AMSTERDAM PER LOCATIE">
                <h4>
                    | TIP 1 | "Dagje winkelen in Amsterdam?" |-> Check Parkeerplaats VRIJ<br/><br/>
                    <ParkingLocationItemNameA/><br/>
                <br/><br/>
                    | TIP 2 | "Zakelijke lunchafspraak?"  |-> Check Parkeerplaats VRIJ<br/><br/>
                    <ParkingLocationItemNameB/><br/>
                <br/><br/>
                    | TIP 3 |"Dagje uit met de kleinkinderen?" |-> Check Parkeerplaats VRIJ<br/><br/>
                    <ParkingLocationItemNameC/>
                    </h4>
            </ContentBox>
        </>
    );
}
export default ContentPage;

