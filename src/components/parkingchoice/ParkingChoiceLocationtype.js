import React from 'react';
import LinkParkingButton from "../linkparkingbutton/LinkParkingButton";

function ParkingChoiceLocationtype() {
    return     (
        <>

            <ul >
                <li>
                    <LinkParkingButton reflink="/home" buttontittle="Parkeren per stadsdeel" />
                </li>
                <li>
                    <LinkParkingButton reflink="/parkeren-amsterdam-parkenride" buttontittle="P&R + OV naar Centrum" />
                </li>
            </ul>
        </>
    );
};
export default ParkingChoiceLocationtype;