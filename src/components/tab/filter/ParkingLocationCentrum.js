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
                <h4>Burgwallen </h4>
                {parkingLocations.filter(parkingLocation => parkingLocation.properties.Name.includes("CE-P08")).map(filteredParkingLocation => (
                    <li id="parkinglocationfilter" key={filteredParkingLocation.id}>
                        <label id="Name">{filteredParkingLocation.properties.Name}</label><br/><br/>
                        Free Places <label id="FreeShort" > {filteredParkingLocation.properties.FreeSpaceShort}</label>
                    </li>
                ))}
                {parkingLocations.filter(parkingLocation => parkingLocation.properties.Name.includes("CE-P26")).map(filteredParkingLocation => (
                    <li id="parkinglocationfilter" key={filteredParkingLocation.id}>
                        <label id="Name">{filteredParkingLocation.properties.Name}</label><br/><br/>
                        Free Places <label id="FreeShort" > {filteredParkingLocation.properties.FreeSpaceShort}</label>
                    </li>
                ))}
                {parkingLocations.filter(parkingLocation => parkingLocation.properties.Name.includes("Rokin")).map(filteredParkingLocation => (
                    <li id="parkinglocationfilter" key={filteredParkingLocation.id}>
                        <label id="Name">{filteredParkingLocation.properties.Name}</label><br/><br/>
                        Free Places <label id="FreeShort" > {filteredParkingLocation.properties.FreeSpaceShort}</label>
                    </li>
                ))}
                {parkingLocations.filter(parkingLocation => parkingLocation.properties.Name.includes("CE-P09")).map(filteredParkingLocation => (
                    <li id="parkinglocationfilter" key={filteredParkingLocation.id}>
                        <label id="Name">{filteredParkingLocation.properties.Name}</label><br/><br/>
                        Free Places <label id="FreeShort" > {filteredParkingLocation.properties.FreeSpaceShort}</label>
                    </li>
                ))}  {parkingLocations.filter(parkingLocation => parkingLocation.properties.Name.includes("CE-P10")).map(filteredParkingLocation => (
                <li id="parkinglocationfilter" key={filteredParkingLocation.id}>
                    <label id="Name">{filteredParkingLocation.properties.Name}</label><br/><br/>
                    Free Places <label id="FreeShort" > {filteredParkingLocation.properties.FreeSpaceShort}</label>
                </li>
            ))}    {parkingLocations.filter(parkingLocation => parkingLocation.properties.Name.includes("CE-P11")).map(filteredParkingLocation => (
                <li id="parkinglocationfilter" key={filteredParkingLocation.id}>
                    <label id="Name">{filteredParkingLocation.properties.Name}</label><br/><br/>
                    Free Places <label id="FreeShort" > {filteredParkingLocation.properties.FreeSpaceShort}</label>
                </li>
            ))}  {parkingLocations.filter(parkingLocation => parkingLocation.properties.Name.includes("CE-P12")).map(filteredParkingLocation => (
                <li id="parkinglocationfilter" key={filteredParkingLocation.id}>
                    <label id="Name">{filteredParkingLocation.properties.Name}</label><br/><br/>
                    Free Places <label id="FreeShort" > {filteredParkingLocation.properties.FreeSpaceShort}</label>
                </li>
            ))}

                <h4>Centraal station </h4>
                {parkingLocations.filter(parkingLocation => parkingLocation.properties.Name.includes("CE-P04")).map(filteredParkingLocation => (
                    <li id="parkinglocationfilter" key={filteredParkingLocation.id}>
                        <label id="Name">{filteredParkingLocation.properties.Name}</label><br/><br/>
                        Free Places <label id="FreeShort" > {filteredParkingLocation.properties.FreeSpaceShort}</label>
                    </li>   ))}
                {parkingLocations.filter(parkingLocation => parkingLocation.properties.Name.includes("CE-P15")).map(filteredParkingLocation => (
                    <li id="parkinglocationfilter" key={filteredParkingLocation.id}>
                        <label id="Name">{filteredParkingLocation.properties.Name}</label><br/><br/>
                        Free Places <label id="FreeShort" > {filteredParkingLocation.properties.FreeSpaceShort}</label>
                    </li>
                ))}
                <h4>Oostelijk havengebied  </h4>
                {parkingLocations.filter(parkingLocation => parkingLocation.properties.Name.includes("CE-P03")).map(filteredParkingLocation => (
                    <li id="parkinglocationfilter" key={filteredParkingLocation.id}>
                        <label id="Name">{filteredParkingLocation.properties.Name}</label><br/><br/>
                        Free Places <label id="FreeShort" > {filteredParkingLocation.properties.FreeSpaceShort}</label>
                    </li>
                ))}
                {parkingLocations.filter(parkingLocation => parkingLocation.properties.Name.includes("CE-P34")).map(filteredParkingLocation => (
                    <li id="parkinglocationfilter" key={filteredParkingLocation.id}>
                        <label id="Name">{filteredParkingLocation.properties.Name}</label><br/><br/>
                        Free Places <label id="FreeShort" > {filteredParkingLocation.properties.FreeSpaceShort}</label>
                    </li>
                ))}
                {parkingLocations.filter(parkingLocation => parkingLocation.properties.Name.includes("CE-P28")).map(filteredParkingLocation => (
                    <li id="parkinglocationfilter" key={filteredParkingLocation.id}>
                        <label id="Name">{filteredParkingLocation.properties.Name}</label><br/><br/>
                        Free Places <label id="FreeShort" > {filteredParkingLocation.properties.FreeSpaceShort}</label>
                    </li>
                ))}
                <h4>Muntplein  </h4>
                {parkingLocations.filter(parkingLocation => parkingLocation.properties.Name.includes("CE-P27")).map(filteredParkingLocation => (
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


