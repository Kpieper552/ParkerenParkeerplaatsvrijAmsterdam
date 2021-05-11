import React from 'react';
import '../../App.css';
import Tile from "../../components/tile/Tile";
import ParkingLocationZuidOost from "../../components/tab/filter/ParkingLocationZuidOost";
import ParkingLocationOost from "../../components/tab/filter/ParkingLocationOost";
import amsterdam from "../../assets/amsterdam.JPG";
import carparking from "../../assets/carparking.jpg";


function ParkerenAmsterdamStadsdelenOostZuidOost() {
    return (
        <>
            <Tile img={amsterdam} imgDescription={amsterdam}/>
            <div ><h1>Parkeren Amsterdam zuidoost en oost</h1>
                <Tile img={carparking} imgDescription={carparking}/>
                <Tile titlearea={"+"}/>
                <Tile titlearea={"+"}/>
                <div id="tilebox">
                    <Tile>
                        <div id="parkingAdam-weg-deel">informatie<br/><br/>hallo dit is ide informatie<br/><br/><ParkingLocationZuidOost/>
                        </div><br/>
                        <div id="parkingAdam-weg">
                            <div className="label-weg">stadsdelen zuid oost of oost</div>
                            <div className="label-weg"></div>
                            <br/>
                        </div>
                        <div id="parkingAdam-weg-deel">informatie<br/><br/><ParkingLocationOost/>
                        </div>
                    </Tile>
                </div>



            </div>
        </>
    );
}
export default ParkerenAmsterdamStadsdelenOostZuidOost;