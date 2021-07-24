import React, {useState, useEffect}  from 'react';
import axios from "axios";
import '../parkinglocationdetails/ParkingLocationDetails.css';

function ParkingLocationDetailsAdres() {
    const [parkings, setParkings] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('https://open.data.amsterdam.nl/ivv/parkeren/locaties.json');
                setParkings(response.data.parkeerlocaties);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <div >
                <h2>Parkeergarages locatie gegegevens</h2>
                {parkings && parkings.map((parking, index) => {
                    return (
                        <li id="parkinglocationdetails" key={parking.parkeerlocatie.adres+index}>
                            <label id="Name">{parking.parkeerlocatie.title}</label>
                            <label id="MoreInfo">
                                {parking.parkeerlocatie.adres}|<br/>
                                {parking.parkeerlocatie.postcode} |
                                {parking.parkeerlocatie.woonplaats} |
                                {/*type------------------- */}<br />
                                |>{parking.parkeerlocatie.type}<br />
                            </label>
                        </li>
                    )
                })}
            </div>
        </>
    );
}

export default ParkingLocationDetailsAdres;











