import React, { useState, useEffect }  from 'react';
import axios from "axios";


//tarieven per tarief soort maken via api opendata overheid amsterdam
function ParkingLocationItem() {
    const [parkingLocations, setParkingLocations] = useState([]);
    const [error, setError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    useEffect (() => {
        async function fetchData() {
            setError(false);
            toggleLoading(true);
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
        <div>
            {error && (<span>error </span>)}
            {loading && (<span>Loading...</span>)}
            <div>
                {parkingLocations.filter(parkingLocation => parkingLocation.properties.Name.includes("Heinekenplein")).map((filteredParkingLocation, index) => (
                    <li  key={filteredParkingLocation.properties.Name+index} >
                            <label >{filteredParkingLocation.properties.Name}</label>
                                |>VRIJ
                                <label id="FreeShort">
                                    {filteredParkingLocation.properties.FreeSpaceShort}</label>
                        </li>
                ))}
            </div>
        </div>
    );
}
export default ParkingLocationItem;

