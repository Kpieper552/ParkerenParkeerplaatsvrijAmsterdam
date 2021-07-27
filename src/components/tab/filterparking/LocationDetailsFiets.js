import React, {useState, useEffect}  from 'react';
import axios from "axios";
import "../filterparking/FilterParking.css";

function LocationDetailsFiets() {
    const [parkings, setParkings] = useState([]);
    const [error, setError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('https://open.data.amsterdam.nl/ivv/parkeren/locaties.json');
                setParkings(response.data.parkeerlocaties);
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
            <div >
                {error && (<span>error </span>)}
                {loading && (<span>Loading...</span>)}
                {parkings.filter(parking => parking.parkeerlocatie.type.includes("Fiets")).map((filteredParking, index) => {
                    return (
                        <li id="parkinglocationdetails" key={filteredParking.parkeerlocatie.adres}>

                            <label id="Name">{filteredParking.parkeerlocatie.title}</label><br />
                            <label id="MoreInfo">
                                {filteredParking.parkeerlocatie.adres} |
                                {filteredParking.parkeerlocatie.postcode} |
                                {filteredParking.parkeerlocatie.woonplaats}<br /><br />
                            </label>
                            <label id="MoreInfo">
                                {/*OPMERKINGEN BLOK-------------------- */}
                                {filteredParking.parkeerlocatie.opmerkingen}
                                {filteredParking.parkeerlocatie.type}<br /><br />
                                {/*OPENBAAR VERVOER BLOK-------------------- */}
                            </label>
                        </li>
                    )
                })}

            </div>
        </>
    );
}

export default LocationDetailsFiets;









