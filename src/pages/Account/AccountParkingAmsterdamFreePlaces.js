import React  from 'react';
import './Account.css';
import Tile from "../../components/tile/Tile";
import ParkingLocationItemFreeLong from "../../components/tab/parkinglocationplacesfree/ParkingLocationItemFreeLong";



function AccountParkingAmsterdamFreePlaces() {
    return (
        <>
                    <div>
                        <Tile>
                            <div id="parkingAdam-weg">
                               <ParkingLocationItemFreeLong/>
                            </div>
                        </Tile>
                    </div>
        </>
    );
}
export default AccountParkingAmsterdamFreePlaces;