import React, {useState, useEffect}  from 'react';
import axios from "axios";


function ParkingLocationDetails() {
    const [parkings, setParkings] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('https://open.data.amsterdam.nl/ivv/parkeren/locaties.json');
                setParkings(response.data.parkeerlocaties);
                console.log("hallo dit is de data vanuit penr!!!!", response.data.parkeerlocaties);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <div ><h2>Amsterdam Parkeergarages Details</h2>

                    {parkings && parkings.sort().map((parking) => {
                        console.log(parking, "details");
                        return (
                            <li id="parkinglocationdetails" key={parking.id}>

                    <label id="Name">{parking.parkeerlocatie.title}</label><br />
                            {parking.parkeerlocatie.type}<br /><br />
                        {parking.parkeerlocatie.adres}<br />
                        {parking.parkeerlocatie.postcode}
                        {parking.parkeerlocatie.woonplaats}<br /><br />
                            {/*OPMERKINGEN BLOK-------------------- */}
                            {parking.parkeerlocatie.opmerkingen}<br /><br />
                            {/*OPENBAAR VERVOER BLOK-------------------- */}
                            </li>
                        )
                    })}

            </div>
        </>
    );
}

            export default ParkingLocationDetails;










