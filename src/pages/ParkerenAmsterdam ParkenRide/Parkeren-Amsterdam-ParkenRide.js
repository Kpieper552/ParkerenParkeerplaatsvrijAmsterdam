import React from 'react';
import '../../App.css';
import Tile from "../../components/tile/Tile";
import ParkingLocationParkAndRide from "../../components/tab/filter/ParkingLocationParkAndRide";
import carparking from "../../assets/carparking.jpg";
import kaart from "../../assets/kaart.jpg";





function ParkerenAmsterdamParkenRide() {
    return (
        <>
            <Tile img={kaart} imgDescription={kaart}/>
            <div ><h1>Parkeren Park & Ride </h1>
                <Tile img={carparking} imgDescription={carparking}/>
                <Tile titlearea={"Park & Ride Plaasten vrij "}/>
                <Tile imgDescription={<span>"-"</span>}/>
                <Tile imgDescription={<span>"-"</span>}/>
                <div id="tilebox">
                    <Tile>
                        <div id="parkingAdam-weg-deel"> d<br/><br/>
                            <ParkingLocationParkAndRide/>
                        </div><br/>
                        <div id="home-Page-weg">
                            <div className="label-weg">Parkeren in Amsterdam</div><br/>
                            <div className="label-weg">Parkeren in Amsterdam</div><br/>
                        </div><br/>
                        <div id="parkingAdam-weg-deel"> informatie<br/><br/>
                            <ParkingLocationParkAndRide/>
                        </div>
                    </Tile>
                </div>
            </div>
        </>
    );
}
export default ParkerenAmsterdamParkenRide;