import React, { useState, useEffect} from 'react';
import axios from 'axios';
import "../filterparking/FilterParking.css";
import parkingPlacesFreeDataRequest from "../../../helper/parkingPlacesFreeDataRequest";

function ParkingLocationZuidOost() {
    const [parkingLocations, setParkingLocations] = useState([]);
    const [error, setError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    useEffect (() => {
        async function fetchData() {
            try {
                const response = await axios.get(parkingPlacesFreeDataRequest());
                setParkingLocations(response.data.features);
                toggleLoading(false);
            } catch (error) {
                console.log(error);
                setError(true);
                toggleLoading(false);
            }
        }
        fetchData();
    }, []);

    return (
            <div id="zuidoost">
                {error && (<span>error </span>)}
                {loading && (<span>Loading...</span>)}
                <h3>Zuid-Oost</h3>
                <h4>Arena</h4>
                {parkingLocations.filter(parkingLocation => parkingLocation.properties.Name.includes("ZO-P0")).map((filteredParkingLocation, index) => {
                        return (
                        <li id="parkinglocationfilter" key={filteredParkingLocation.properties.Name+index}>
                            <label id="Name">{filteredParkingLocation.properties.Name}</label><br/><br/>
                            |>VRIJ <label id="FreeShort"> {filteredParkingLocation.properties.FreeSpaceShort}</label>
                        </li>
                    )
                })}
                {parkingLocations.filter(parkingLocation => parkingLocation.properties.Name.includes("ZO-P10")).map((filteredParkingLocation, index) => {
                    return (
                        <li id="parkinglocationfilter" key={filteredParkingLocation.properties.Name+index}>
                            <label id="Name">{filteredParkingLocation.properties.Name}</label><br/><br/>
                            |>VRIJ <label id="FreeShort"> {filteredParkingLocation.properties.FreeSpaceShort}</label>
                        </li>
                    )
                })}<br/><br/>
                <h4>HES</h4>
                {parkingLocations.filter(parkingLocation => parkingLocation.properties.Name.includes("ZO-P18")).map((filteredParkingLocation, index) => {
                    return (
                        <li id="parkinglocationfilter" key={filteredParkingLocation.properties.Name+index}>
                            <label id="Name">{filteredParkingLocation.properties.Name}</label><br/><br/>
                            |>VRIJ <label id="FreeShort"> {filteredParkingLocation.properties.FreeSpaceShort}</label>
                        </li>
                    )
                })}<br/><br/>
                <h4>Bijlmerdreef</h4>
                {parkingLocations.filter(parkingLocation => parkingLocation.properties.Name.includes("ZO-P2")).map((filteredParkingLocation, index) => {
                    return (
                        <li id="parkinglocationfilter" key={filteredParkingLocation.properties.Name+index}>
                            <label id="Name">{filteredParkingLocation.properties.Name}</label><br/><br/>
                            |>VRIJ <label id="FreeShort"> {filteredParkingLocation.properties.FreeSpaceShort}</label>
                        </li>
                    )
                })}<br/><br/>
            </div>
    );
}
export default ParkingLocationZuidOost;


