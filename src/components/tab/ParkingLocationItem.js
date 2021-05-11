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
        <div id="locationFree"><h2>Parkeerplaats VRIJ?</h2>
            {parkingLocations && parkingLocations.map((parkingLocation) => {
                console.log(parkingLocation);
                return (
                    <li id="parkinglocationdetails" key={parkingLocation.id} >
                      <label id="Name" >{parkingLocation.properties.Name}</label><br/><br/>
                        <label  id="MoreInfo" >
                            Free Places
                            <label id="FreeShort">
                                {parkingLocation.properties.FreeSpaceShort}<br/>
                            </label><br/>
                        </label><br/>
                        <label  id="MoreInfo" >
                            Total Capacity
                            <label id="FreeShort">
                                {parkingLocation.properties.ShortCapacity}<br/><br/>
                            </label><br/>
                        </label>

                    </li>
                )
            })}

        </div>
    </>
);
}
export default ParkingLocationItem;

//                        <label  id="MoreInfo" >
//                             Free Places
//                             <label id="FreeShort">
//                                 {parkingLocation.properties.FreeSpaceLong}<br/><br/>
//                             </label><br/>
//                         </label>
//                         <label  id="MoreInfo" >
//                             Total Capacity
//                             <label id="FreeShort">
//                                  {parkingLocation.properties.LongCapacity}<br/><br/>
//                             </label><br/>
//                         </label>