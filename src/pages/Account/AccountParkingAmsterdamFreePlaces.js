import React  from 'react';
import '../../App.css';
import Tile from "../../components/tile/Tile";
import ParkingLocationItemFreeLong from "../../components/tab/parkinglocationplacesfree/ParkingLocationItemFreeLong";



function AccountParkingAmsterdamFreePlaces() {
    return (
        <>
            <div>
                <div>
                    <Tile>
                        <div id="parkingAdam-weg" >
                            <ParkingLocationItemFreeLong/>
                            <br/><br/>
                        </div>
                    </Tile>
                </div>
            </div>
        </>
    );
}
export default AccountParkingAmsterdamFreePlaces;