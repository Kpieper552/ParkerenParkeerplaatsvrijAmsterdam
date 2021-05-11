import React, { useState, useEffect} from 'react';
import axios from 'axios';
import '../../../App.css';


function ParkingLocationParkAndRide() {
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
        <>
            <div id="penr">
                {error && (<span>error </span>)}
                {loading && (<span>Loading...</span>)}
                <h4>P&R Locaties</h4>
                {parkingLocations.filter(parkingLocation => parkingLocation.properties.Name.includes("P+R Zeeburg")).map((filteredParkingLocation) => {
                    return (
                        <li id="parkinglocationfilter" key={filteredParkingLocation.id}>
                            <label id="Name">{filteredParkingLocation.properties.Name}</label><br/><br/>
                            Free Places <label id="FreeShort" > {filteredParkingLocation.properties.FreeSpaceShort}</label>
                        </li>
                    )
                })}<br/><br/>
                {parkingLocations.filter(parkingLocation => parkingLocation.properties.Name.includes("P+R Olympisch")).map((filteredParkingLocation) => {
                    return (
                        <li id="parkinglocationfilter" key={filteredParkingLocation.id}>
                            <label id="Name">{filteredParkingLocation.properties.Name}</label><br/><br/>
                            Free Places <label id="FreeShort" > {filteredParkingLocation.properties.FreeSpaceShort}</label>
                        </li>
                    )
                })}<br/><br/>
                {parkingLocations.filter(parkingLocation => parkingLocation.properties.Name.includes("P+R Arena")).map((filteredParkingLocation) => {
                    return (
                        <li id="parkinglocationfilter" key={filteredParkingLocation.id}>
                            <label id="Name">{filteredParkingLocation.properties.Name}</label><br/><br/>
                            Free Places <label id="FreeShort" > {filteredParkingLocation.properties.FreeSpaceShort}</label>
                        </li>
                    )
                })}<br/><br/>
                {parkingLocations.filter(parkingLocation => parkingLocation.properties.Name.includes("P+R Noord")).map((filteredParkingLocation) => {
                    return (
                        <li id="parkinglocationfilter" key={filteredParkingLocation.id}>
                            <label id="Name">{filteredParkingLocation.properties.Name}</label><br/><br/>
                            Free Places <label id="FreeShort" > {filteredParkingLocation.properties.FreeSpaceShort}</label>
                        </li>
                    )
                })}<br/><br/>
            </div>
        </>
    );
}
export default ParkingLocationParkAndRide;




