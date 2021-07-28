import React from 'react';
import LinkParkingButton from "../linkparkingbutton/LinkParkingButton";

function ParkingChoiceStaytime() {
    return     (
        <>
            <ul >
                <li>
                    <LinkParkingButton reflink="/home" buttontittle="P |Kort Parkeren | P" />
                </li>
                <li>
                    <LinkParkingButton reflink="/account" buttontittle="P | Lang Parkeren | P" />
                </li>
            </ul>
        </>
    );
};
export default ParkingChoiceStaytime;