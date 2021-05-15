import React from 'react';
import '../../App.css';
import Tile from "../../components/tile/Tile";
import ParkingLocationDetailsAdres from "../../components/tab/parkinglocationdetails/ParkingLocationDetailsAdres";
import ParkingLocationsDetailsName from "../../components/tab/parkinglocationdetails/ParkingLocationsDetailsName";






function ParkingAmsterdamTab() {

    return (
        <>
            <div>
              <Tile>
                  <div id="parkingAdam-weg-deel">
                      <ParkingLocationsDetailsName /><br/>
                  </div>
                  <div id="parkingAdam-weg-deel" >
                      <ParkingLocationDetailsAdres /><br/>
                  </div>
                  <div >

                  </div>
              </Tile>
        </div>

        </>
    );
}
export default ParkingAmsterdamTab;


//                        <Tile img={kaart} imgDescription={kaart}/>