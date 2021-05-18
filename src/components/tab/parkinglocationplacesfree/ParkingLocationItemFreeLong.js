import React, { useState, useEffect }  from 'react';
import axios from "axios";



function ParkingLocationItemFreeLong() {
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
            <div><h2>Parkeerplaats</h2>
                {parkingLocations && parkingLocations.map((parkingLocation, index) => {
                    return (
                        <li id="parkinglocationdetails" key={parkingLocation.properties.Name+index} >
                            <label id="Name" >{parkingLocation.properties.Name}</label>
                            <label  id="MoreInfo" >
                                |>VRIJ - parkeren lang
                                <label id="FreeLong">
                                    {parkingLocation.properties.FreeSpaceLong}</label>
                                |> Capaciteit
                                <label id="CapLong">
                                    {parkingLocation.properties.LongCapacity}</label>
                            </label>
                        </li>
                    )
                })}
            </div>
        </div>
    );
}
export default ParkingLocationItemFreeLong;

