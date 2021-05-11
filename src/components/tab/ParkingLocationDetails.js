import React, {useState, useEffect}  from 'react';
import axios from "axios";


function ParkingLocationDetails() {
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
                <h2>Amsterdam Parkeergarages Details</h2>
                    {parkings && parkings.map((parking) => {
                        return (
                        <li id="parkinglocationdetails" key={parking.id}>
                            <label id="Name"><h4>{parking.parkeerlocatie.title}</h4>
                            </label>
                            <label id="MoreInfo">
                            {parking.parkeerlocatie.adres}<br/>
                            {parking.parkeerlocatie.postcode}<br/>
                            {parking.parkeerlocatie.woonplaats}<br /><br /><br/>
                            </label>
                            <label id="MoreInfo">
                                {parking.parkeerlocatie.type}<br /><br/>
                            </label>
                            <label id="MoreInfo">
                                    {/*OPENBAAR VERVOER BLOK-------------------- */}
                                    {parking.parkeerlocatie.OV_bus}<br />
                                    {parking.parkeerlocatie.OV_tram}<br />
                                    {parking.parkeerlocatie.OV_metro}<br />
                                    {parking.parkeerlocatie.OV_trein}<br /><br />
                                {/*OPMERKINGEN BLOK-------------------- */}<br/>
                                {parking.parkeerlocatie.opmerkingen}<br /><br/>
                            </label>
                            <label id="MoreInfo">
                                {parking.parkeerlocatie.url}<br />
                                {parking.parkeerlocatie.urltitle}
                            </label>
                        </li>
                        )
                    })}
            </div>
        </>
    );
}

export default ParkingLocationDetails;











