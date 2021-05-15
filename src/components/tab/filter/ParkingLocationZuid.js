import React, { useState, useEffect} from 'react';
import axios from 'axios';
import '../../../App.css';


function ParkingLocationZuid() {
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
            <div id="zuid">
                {error && (<span>error </span>)}
                {loading && (<span>Loading...</span>)}
                <h3>Zuid</h3>
                <h4>de Pijp</h4>
                {parkingLocations.filter(parkingLocation => parkingLocation.properties.Name.includes("DP-FP")).map((filteredParkingLocation, index) => {
                    return (
                        <li id="parkinglocationfilter" key={filteredParkingLocation.properties.Name+index}>
                            <label id="Name">{filteredParkingLocation.properties.Name}</label><br/><br/>
                            |>VRIJ<label id="FreeShort" > {filteredParkingLocation.properties.FreeSpaceShort}</label>
                        </li>
                    )
                })}
                <h4>Olympisch stadion</h4>
                {parkingLocations.filter(parkingLocation => parkingLocation.properties.Name.includes("CE-P02")).map((filteredParkingLocation, index) => {
                    return (
                        <li id="parkinglocationfilter" key={filteredParkingLocation.properties.Name+index}>
                            <label id="Name">{filteredParkingLocation.properties.Name}
                            </label><br/><br/>
                            |>VRIJ <label id="FreeShort">
                            {filteredParkingLocation.properties.FreeSpaceShort}
                            </label>
                        </li>
                    )
                })}
                <h4>UMC Het VU</h4>
                {parkingLocations.filter(parkingLocation => parkingLocation.properties.Name.includes("VU")).map((filteredParkingLocation, index) => {
                    return (
                        <li id="parkinglocationfilter" key={filteredParkingLocation.properties.Name+index}>
                            <label id="Name">{filteredParkingLocation.properties.Name}</label><br/><br/>
                            |>VRIJ <label id="FreeShort" > {filteredParkingLocation.properties.FreeSpaceShort}</label>
                        </li>
                    )
                })}
                <h4>Overig</h4>
                {parkingLocations.filter
                (parkingLocation => parkingLocation.properties.Name.includes("ZU-FP")).map((filteredParkingLocation, index) => (
                    <li id="parkinglocationfilter" key={filteredParkingLocation.properties.Name+index}>
                        <label id="Name">{filteredParkingLocation.properties.Name}</label><br/><br/>
                        |>VRIJ <label id="FreeShort" > {filteredParkingLocation.properties.FreeSpaceShort}</label>
                    </li>
                ))}
                {parkingLocations.filter(parkingLocation => parkingLocation.properties.Name.includes("FP Strawinskylaan")).map((filteredParkingLocation, index) => {
                    return (
                        <li id="parkinglocationfilter" key={filteredParkingLocation.properties.Name+index}>
                            <label id="Name">{filteredParkingLocation.properties.Name}</label><br/><br/>
                            |>VRIJ <label id="FreeShort" > {filteredParkingLocation.properties.FreeSpaceShort}</label>
                        </li>
                    )
                })}
                <h4>Julianaplein</h4>
                {parkingLocations.filter(parkingLocation => parkingLocation.properties.Name.includes("FP Juliana")).map((filteredParkingLocation, index) => {
                    return (
                        <li id="parkinglocationfilter" key={filteredParkingLocation.properties.Name+index}>
                            <label id="Name">{filteredParkingLocation.properties.Name}</label><br/><br/>
                            |>VRIJ <label id="FreeShort" > {filteredParkingLocation.properties.FreeSpaceShort}</label>
                        </li>
                    )
                })}
            </div>
    );
}
export default ParkingLocationZuid;


