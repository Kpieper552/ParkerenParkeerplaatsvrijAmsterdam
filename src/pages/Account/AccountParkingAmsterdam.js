import React from 'react';
import '../../App.css';
import Tile from "../../components/tile/Tile";
import ParkingLocationDetails from "../../components/tab/parkinglocationdetails/ParkingLocationDetails";






function AccountParkingAmsterdam() {

    return (
        <>
            <div>
                <Tile>
                    <div id="parkingAdam-weg">
                        <ParkingLocationDetails /><br/>
                     </div>
                </Tile>
            </div>
        </>
    );
}
export default AccountParkingAmsterdam;


