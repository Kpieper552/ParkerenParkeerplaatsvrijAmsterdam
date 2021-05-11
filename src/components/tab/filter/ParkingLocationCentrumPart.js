import React, { useState, useEffect} from 'react';
import axios from 'axios';
import '../../../App.css';


function ParkingLocationCentrum() {
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
//concat array maken
    return (
        <>
            <div id="centrum">
                {error && (<span>error </span>)}
                {loading && (<span>Loading...</span>)}

                <h4>Museumplein 5</h4>
                {parkingLocations.filter(parkingLocation => parkingLocation.properties.Name.includes("CE-P06")).map(filteredParkingLocation => (
                    <li id="parkinglocationfilter" key={filteredParkingLocation.id}>
                        <label id="Name">{filteredParkingLocation.properties.Name}</label><br/><br/>
                        Free Places <label id="FreeShort" > {filteredParkingLocation.properties.FreeSpaceShort}</label>
                    </li>
                ))}  {parkingLocations.filter(parkingLocation => parkingLocation.properties.Name.includes("CE-P07")).map(filteredParkingLocation => (
                <li id="parkinglocationfilter" key={filteredParkingLocation.id}>
                    <label id="Name">{filteredParkingLocation.properties.Name}</label><br/><br/>
                    Free Places <label id="FreeShort" > {filteredParkingLocation.properties.FreeSpaceShort}</label>
                </li>
            ))}
                {parkingLocations.filter(parkingLocation => parkingLocation.properties.Name.includes("CE-P33")).map(filteredParkingLocation => (
                    <li id="parkinglocationfilter" key={filteredParkingLocation.id}>
                        <label id="Name">{filteredParkingLocation.properties.Name}</label><br/><br/>
                        Free Places <label id="FreeShort" > {filteredParkingLocation.properties.FreeSpaceShort}</label>
                    </li>
                ))}
                {parkingLocations.filter(parkingLocation => parkingLocation.properties.Name.includes("CE-P30")).map(filteredParkingLocation => (
                    <li id="parkinglocationfilter" key={filteredParkingLocation.id}>
                        <label id="Name">{filteredParkingLocation.properties.Name}</label><br/><br/>
                        Free Places <label id="FreeShort" > {filteredParkingLocation.properties.FreeSpaceShort}</label>
                    </li>
                ))}

                {parkingLocations.filter(parkingLocation => parkingLocation.properties.Name.includes("IJDok")).map(filteredParkingLocation => (
                    <li id="parkinglocationfilter" key={filteredParkingLocation.id}>
                        <label id="Name">{filteredParkingLocation.properties.Name}</label><br/><br/>
                        Free Places <label id="FreeShort" > {filteredParkingLocation.properties.FreeSpaceShort}</label>
                    </li>
                ))}
                <h4>Jordaan </h4>
                {parkingLocations.filter(parkingLocation => parkingLocation.properties.Name.includes("CE-P05")).map(filteredParkingLocation => (
                    <li id="parkinglocationfilter" key={filteredParkingLocation.id}>
                        <label id="Name">{filteredParkingLocation.properties.Name}</label><br/><br/>
                        Free Places <label id="FreeShort" > {filteredParkingLocation.properties.FreeSpaceShort}</label>
                    </li>
                ))}
                {parkingLocations.filter(parkingLocation => parkingLocation.properties.Name.includes("CE-P31")).map(filteredParkingLocation => (
                    <li id="parkinglocationfilter" key={filteredParkingLocation.id}>
                        <label id="Name">{filteredParkingLocation.properties.Name}</label><br/><br/>
                        Free Places <label id="FreeShort" > {filteredParkingLocation.properties.FreeSpaceShort}</label>
                    </li>
                ))}

                <h4>Overig </h4>
                {parkingLocations.filter(parkingLocation => parkingLocation.properties.Name.includes("CE-P13")).map(filteredParkingLocation => (
                    <li id="parkinglocationfilter" key={filteredParkingLocation.id}>
                        <label id="Name">{filteredParkingLocation.properties.Name}</label><br/><br/>
                        Free Places <label id="FreeShort" > {filteredParkingLocation.properties.FreeSpaceShort}</label>
                    </li>
                ))}  {parkingLocations.filter(parkingLocation => parkingLocation.properties.Name.includes("CE-P14")).map(filteredParkingLocation => (
                <li id="parkinglocationfilter" key={filteredParkingLocation.id}>
                    <label id="Name">{filteredParkingLocation.properties.Name}</label><br/><br/>
                    Free Places <label id="FreeShort" > {filteredParkingLocation.properties.FreeSpaceShort}</label>
                </li>
            ))}
                {parkingLocations.filter(parkingLocation => parkingLocation.properties.Name.includes("CE-FP")).map(filteredParkingLocation => (
                    <li id="parkinglocationfilter" key={filteredParkingLocation.id}>
                        <label id="Name">{filteredParkingLocation.properties.Name}</label><br/><br/>
                        Free Places <label id="FreeShort" > {filteredParkingLocation.properties.FreeSpaceShort}</label>
                    </li>
                ))}

                {parkingLocations.filter(parkingLocation => parkingLocation.properties.Name.includes("CE-P32")).map(filteredParkingLocation => (
                    <li id="parkinglocationfilter" key={filteredParkingLocation.id}>
                        <label id="Name">{filteredParkingLocation.properties.Name}</label><br/><br/>
                        Free Places <label id="FreeShort" > {filteredParkingLocation.properties.FreeSpaceShort}</label>
                    </li>
                ))}
            </div>
        </>
    );
}
export default ParkingLocationCentrum;


