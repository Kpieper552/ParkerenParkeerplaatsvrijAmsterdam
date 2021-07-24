import React from 'react';
import Tile from "../tile/Tile";
import carparking from "../../assets/carparking.jpg";



function CarParking() {

    return (
        <>
            <br/>
            <Tile img={carparking} imgDescription={carparking}/>
            <br/><br/><br/>
        </>
    );
}
export default CarParking;
