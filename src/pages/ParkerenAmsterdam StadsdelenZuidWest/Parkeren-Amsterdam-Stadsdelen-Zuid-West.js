import React from 'react';
import '../../App.css';
import Tile from "../../components/tile/Tile";
import ParkingLocationWest from "../../components/tab/filter/ParkingLocationWest";
import ParkingLocationZuid from "../../components/tab/filter/ParkingLocationZuid";
import carparking from "../../assets/carparking.jpg";
import amsterdam from "../../assets/amsterdam.JPG.png";
import {NavLink} from "react-router-dom";


function ParkerenAmsterdamStadsdelenZuidWest() {
    return (
        <>
            <Tile img={amsterdam} imgDescription={amsterdam}/>
            <div ><h1>Parkeren Amsterdam Zuid en West </h1>
                <Tile img={carparking} imgDescription={carparking}/>
                <Tile titlearea={" +"}/>
                <Tile titlearea={" +"}/>
                <div id="tilebox">
                    <Tile>
                        <div id="parkingAdam-weg-deel"><br/>
                            <ParkingLocationZuid/>
                            <NavLink to="/"> |> Home</NavLink><br/>
                        </div><br/>
                        <div id="parkingAdam-weg">
                            <div className="label-weg">parkeren in zuid of west</div>
                            <div className="label-weg"></div>
                            <div className="label-weg"></div>
                            <br/>
                        </div><br/>
                        <div id="parkingAdam-weg-deel"><br/><br/>
                            <ParkingLocationWest/>
                            <NavLink to="/"> |> Home</NavLink><br/>
                        </div>
                    </Tile>
                </div>
                <Tile img={carparking} imgDescription={carparking}/>


        </div>



        </>
    );
}
export default ParkerenAmsterdamStadsdelenZuidWest;

