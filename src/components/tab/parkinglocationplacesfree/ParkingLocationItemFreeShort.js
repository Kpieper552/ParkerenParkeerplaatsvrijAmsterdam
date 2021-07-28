import React, { useState, useEffect }  from 'react';
import axios from "axios";
import "../parkinglocationplacesfree/ParkingLocationPlacesFree.css";
import parkingPlacesFreeDataRequest from "../../../helper/parkingPlacesFreeDataRequest";

function ParkingLocationItemFreeShort() {
    const [parkingLocations, setParkingLocations] = useState([]);
    const [error, setError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    useEffect (() => {
        async function fetchData() {
            setError(false);
            toggleLoading(true);
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
        <div>
            {error && (<span>error </span>)}
            {loading && (<span>Loading...</span>)}
            <div><h2>Parkeerplaatsen VRIJ Parkeergarages Amsterdam Kort Parkeren</h2>
                {parkingLocations && parkingLocations.map((parkingLocation, index) => {
                return (
                        <li id="parkinglocationdetails" key={parkingLocation.properties.Name+index} >
                            <label id="Name" >{parkingLocation.properties.Name}</label>
                            <label  id="MoreInfo" >
                                |>VRIJ
                                <label id="FreeShort">
                                    {parkingLocation.properties.FreeSpaceShort}</label>
                                |> Capaciteit
                                <label id="CapShort">
                                    {parkingLocation.properties.ShortCapacity}</label>
                            </label>
                        </li>
                        )
                 })}
            </div>
        </div>
);
}
export default ParkingLocationItemFreeShort;

