import React from 'react';
import '../../App.css';
import ParkingLocationItemNameA from "../tab/parkinglocationplacesfree/ParkingLocationItemNameA";




function ContentMyAccount() {

    return (
        <>
        <div id="parkingAdam-form-deel">
            <div id="parkingAdam-content-deel">
                <h3>PARKEREN PARKEERPLAATS VRIJ AMSTERDAM </h3>
                    <div id="parkingAdam-content-deel">
                    <h4>
                        | Park & Ride |<br/>
                        | Parkeren Centrum |<br/>
                        | Parkeren Noord |<br/>
                        | Parkeren ZuidOoost<br/>
                        | Parkeren Oost |<br/>
                        | Parkeren Zuid |<br/>
                        | Parkeren West |<br/><br/>
                        <ParkingLocationItemNameA/><br/>
                    </h4>
                    </div><div id="MoreInfo">MyAccount</div>
            </div>
            </div>
    </>
    );
}
export default ContentMyAccount;

