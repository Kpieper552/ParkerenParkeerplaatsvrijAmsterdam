import React, {useState, useEffect}  from 'react';
import axios from "axios";


function LocationDetailsParkAndRide() {
    const [parkings, setParkings] = useState([]);
    const [error, setError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('https://open.data.amsterdam.nl/ivv/parkeren/locaties.json');
                setParkings(response.data.parkeerlocaties);
                console.log("hallo dit is de data vanuit penr!!!!", response.data.parkeerlocaties);
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
            <div ><h2>Amsterdam Park & Ride Parkeerplaatsen Details</h2>
                {error && (<span>error </span>)}
                {loading && (<span>Loading...</span>)}

                {parkings.filter(parking => parking.parkeerlocatie.type.includes("P+R")).map((filteredParking) => {
                    console.log(filteredParking);
                    return (
                        <li id="parkinglocationdetails" key={filteredParking.id}>

                            <label id="Name">{filteredParking.parkeerlocatie.title}</label><br />
                            {filteredParking.parkeerlocatie.type}<br /><br />
                            {filteredParking.parkeerlocatie.adres}<br />
                            {filteredParking.parkeerlocatie.postcode}
                            {filteredParking.parkeerlocatie.woonplaats}<br /><br />
                            {/*OPMERKINGEN BLOK-------------------- */}
                            {filteredParking.parkeerlocatie.opmerkingen}
                            {/*OPENBAAR VERVOER BLOK-------------------- */}
                            {filteredParking.parkeerlocatie.OV_bus}<br /><br />
                            {filteredParking.parkeerlocatie.OV_tram}<br /><br />
                        </li>
                    )
                })}

            </div>
        </>
    );
}

export default LocationDetailsParkAndRide;










