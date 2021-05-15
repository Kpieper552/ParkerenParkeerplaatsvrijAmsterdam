import React, { useState, useEffect} from 'react';
import axios from 'axios';
import '../../../App.css';


function ParkingLocationParkAndRidePart() {
    const [parkingLocations, setParkingLocations] = useState([]);
    const [error, setError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    useEffect (() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://opd.it-t.nl/data/amsterdam/ParkingLocation.json');
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
        <div id="penr">
            {error && (<span>error </span>)}
            {loading && (<span>Loading...</span>)}
            <h3>Park & Ride</h3>
           {parkingLocations.filter(parkingLocation => parkingLocation.properties.Name.includes("P+R Olympisch")).map((filteredParkingLocation, index) => {
                return (
                    <li id="parkinglocationfilter" key={filteredParkingLocation.properties.Name+index}>
                        <label id="Name">{filteredParkingLocation.properties.Name}</label><br/><br/>
                        |>VRIJ <label id="FreeShort" > {filteredParkingLocation.properties.FreeSpaceShort}</label>
                    </li>
                )
            })}<br/><br/>
            {parkingLocations.filter(parkingLocation => parkingLocation.properties.Name.includes("P+R Arena")).map((filteredParkingLocation, index) => {
                return (
                    <li id="parkinglocationfilter" key={filteredParkingLocation.properties.Name+index}>
                        <label id="Name">{filteredParkingLocation.properties.Name}</label><br/><br/>
                        |>VRIJ <label id="FreeShort" > {filteredParkingLocation.properties.FreeSpaceShort}</label>
                    </li>
                )
            })}<br/><br/>
            {parkingLocations.filter(parkingLocation => parkingLocation.properties.Name.includes("P+R Noord")).map((filteredParkingLocation, index) => {
                return (
                    <li id="parkinglocationfilter" key={filteredParkingLocation.properties.Name+index}>
                        <label id="Name">{filteredParkingLocation.properties.Name}</label><br/><br/>
                        |>VRIJ <label id="FreeShort" > {filteredParkingLocation.properties.FreeSpaceShort}</label>
                    </li>
                )
            })}<br/><br/>
        </div>

    );
}
export default ParkingLocationParkAndRidePart;




