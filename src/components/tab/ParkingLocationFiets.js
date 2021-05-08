import React, { useState, useEffect} from 'react';
import axios from 'axios';
import '../../App.css';


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
        <>
            <div id="fiets"><h2>Parkeer Locaties Fiets [freeplaces?]</h2>
                {error && (<span>error </span>)}
                {loading && (<span>Loading...</span>)}
                {parkingLocations.filter(parkingLocation => parkingLocation.properties.Name.includes("Fiets")).map((filteredParkingLocation) => {
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
export default ParkingLocationFiets;


