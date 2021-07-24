import React, { useState, useEffect} from 'react';
import axios from 'axios';
import "../filterparking/FilterParking.css";


function ParkingLocationFiets() {
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
            <div >
                {error && (<span>error </span>)}
                {loading && (<span>Loading...</span>)}
                {parkingLocations.filter(parkingLocation => parkingLocation.properties.Name.includes("Fiets")).map((filteredParkingLocation, index) => {
                    return (
                        <li id="parkinglocationfilter" key={filteredParkingLocation.properties.Name+index}>
                        {filteredParkingLocation.properties.Name}
                        Free Places
                        {filteredParkingLocation.properties.FreeSpaceShort}
                        </li>
                    )
                })}
            </div>
    );
}
export default ParkingLocationFiets;


