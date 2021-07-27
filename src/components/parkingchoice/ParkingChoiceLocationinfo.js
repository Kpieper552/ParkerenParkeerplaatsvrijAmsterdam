import React from 'react';
import LinkParkingButton from "../linkparkingbutton/LinkParkingButton";

function ParkingFirst() {
    return     (
        <>
            <ul >
                <li>
                    <LinkParkingButton reflink="/home" buttontittle="Parkeerlocatie informatie" />
                </li>
                <li>
                    <LinkParkingButton reflink="/account" buttontittle="Parkeerlocatie informatie uitgebreid" />
                </li>
            </ul>
        </>
    );
};
export default ParkingFirst;