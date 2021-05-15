import React from 'react';
import '../../App.css';
import Tile from "../../components/tile/Tile";
import ParkingLocationCentrum from "../../components/tab/filter/ParkingLocationCentrum";
import ParkingLocationCentrumPart from "../../components/tab/filter/ParkingLocationCentrumPart";
import carparking from "../../assets/carparking.jpg";
import amsterdam from "../../assets/amsterdam.JPG.png";
import {NavLink} from "react-router-dom";


function ParkerenAmsterdamCentrum() {
    return (
        <>
            <Tile img={amsterdam} imgDescription={amsterdam}/>
            <div ><h1>Parkeren Centrum</h1>
                <Tile img={carparking} imgDescription={carparking}/>
                <Tile titlearea={"Parkeren Centrum Vrije Plaatsen "}/>
                <Tile titlearea={" "}/>
                <Tile titlearea={" "}/>
                <div id="tilebox">
                    <Tile>
                        <div id="parkingAdam-weg-deel">
                            <br/><br/><ParkingLocationCentrumPart/>
                            <NavLink to="/"> |> Home</NavLink><br/>
                        </div><br/>
                        <div id="parkingAdam-weg">
                            <div className="label-weg">parkeren in centrum </div>
                            <div className="label-weg">parkeren in centrum</div>
                            <div className="label-weg">parkeren in centrum</div>
                            <br/>
                        </div><br/>
                        <div id="parkingAdam-weg-deel">
                            <br/><br/><ParkingLocationCentrum/>
                            <NavLink to="/"> |> Home</NavLink><br/>
                        </div>
                    </Tile>
                </div>
            </div>
        </>
    );
}
export default ParkerenAmsterdamCentrum;