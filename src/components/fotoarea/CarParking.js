import React from 'react';
//import '../../App.css';
import Tile from "../../components/tile/Tile";
import carparking from "../../assets/carparking.jpg";



function CarParking() {

    return (
        <>
            <Tile img={carparking} imgDescription={carparking}/>
        </>
    );
}
export default CarParking;
