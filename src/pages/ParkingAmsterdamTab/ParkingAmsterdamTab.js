import React from 'react';
import '../../App.css';
import Tile from "../../components/tile/Tile";
import ParkingLocationDetailsAdres from "../../components/tab/parkinglocationdetails/ParkingLocationDetailsAdres";






function ParkingAmsterdamTab() {

    return (
        <>
            <div>
              <Tile>
                  <div id="parkingAdam-weg" >
                      <ParkingLocationDetailsAdres /><br/>
                  </div>
              </Tile>
            </div>
        </>
    );
}
export default ParkingAmsterdamTab;


//                        <Tile img={kaart} imgDescription={kaart}/>