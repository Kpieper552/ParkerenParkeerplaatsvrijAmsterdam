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
                console.log(response.data.features);
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
        {error && (<span>error </span>)}
        {loading && (<span>Loading...</span>)}
        <div id="penr"><h2>Amsterdam Parkeergarages [freeplaces?]</h2>
        <ul>
            {parkingLocations && parkingLocations.sort().map((parkingLocation) => {
                console.log(parkingLocation);
                return (
                    <li id="parkinglocation" key={parkingLocation.id} >
                      <label id="Name" >{parkingLocation.properties.Name}</label><br/><br/>
                        Free Places <label  id="FreeShort" >
                            {parkingLocation.properties.FreeSpaceShort}
                        </label>
                    </li>
                )
            })}
        </ul>
        </div>
    </>
);
}
export default ParkingLocationItem;

//                    FreePlacesLong<button type="text" id="FreeLong" >{parkingLocation.properties.FreeSpaceLong}</button><br/><br/>
//                     TotalPlacesLong<button type="text" id="CapLong" >{parkingLocation.properties.LongCapacity}</button><br/><br/>
//