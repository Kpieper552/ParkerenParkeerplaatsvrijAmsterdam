import React from 'react';
import '../../App.css';
import Tile from "../../components/tile/Tile";
import ParkingLocationDetailsAdres from "../../components/tab/parkinglocationdetails/ParkingLocationDetailsAdres";
import ParkingLocationsDetailsName from "../../components/tab/parkinglocationdetails/ParkingLocationsDetailsName";
import ParkingLocationDetails from "../../components/tab/parkinglocationdetails/ParkingLocationDetails";






function AccountParkingAmsterdam() {

    return (
        <>
            <div>
                <Tile>
                    <div id="parkingAdam-weg-deel">
                        <ParkingLocationDetails /><br/>
                    </div>
                    <div id="parkingAdam-weg-deel" >

                    </div>
                    <div >

                    </div>
                </Tile>
            </div>

        </>
    );
}
export default AccountParkingAmsterdam;


