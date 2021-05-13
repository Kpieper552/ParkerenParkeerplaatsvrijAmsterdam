import React, {useState, useEffect}  from 'react';
import axios from "axios";


function LocationDetailsZuidOost() {
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
            <div ><h2>Amsterdam Zuid-Oost Parkeergarages Details</h2>
                {error && (<span>error </span>)}
                {loading && (<span>Loading...</span>)}

                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1101")).map((filteredParking, index) => {
                    return (
                        <li id="parkinglocationdetails" key={filteredParking.parkeerlocatie.adres+index}>
                            <label id="Name">{filteredParking.parkeerlocatie.title}</label><br />
                            {filteredParking.parkeerlocatie.type}<br /><br />
                            {filteredParking.parkeerlocatie.adres} |
                            {filteredParking.parkeerlocatie.postcode} |
                            {filteredParking.parkeerlocatie.woonplaats}
                            {/*OPMERKINGEN BLOK-------------------- */}
                            {filteredParking.parkeerlocatie.opmerkingen}
                            {/*OPENBAAR VERVOER BLOK-------------------- */}
                        </li>
                    )
                })}

                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1102CV")).map((filteredParking, index) => {
                    return (
                        <li id="parkinglocationdetails" key={filteredParking.parkeerlocatie.adres+index}>
                            <label id="Name">{filteredParking.parkeerlocatie.title}</label><br />
                            {filteredParking.parkeerlocatie.type}<br /><br />
                            {filteredParking.parkeerlocatie.adres} |
                            {filteredParking.parkeerlocatie.postcode} |
                            {filteredParking.parkeerlocatie.woonplaats}
                            {/*OPMERKINGEN BLOK-------------------- */}
                            {filteredParking.parkeerlocatie.opmerkingen}
                            {/*OPENBAAR VERVOER BLOK-------------------- */}
                        </li>
                    )
                })}
                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1102CV")).map((filteredParking, index) => {
                    return (
                        <li id="parkinglocationdetails" key={filteredParking.parkeerlocatie.adres+index}>
                            <label id="Name">{filteredParking.parkeerlocatie.title}</label><br />
                            {filteredParking.parkeerlocatie.type}<br /><br />
                            {filteredParking.parkeerlocatie.adres} |
                            {filteredParking.parkeerlocatie.postcode} |
                            {filteredParking.parkeerlocatie.woonplaats}
                            {/*OPMERKINGEN BLOK-------------------- */}
                            {filteredParking.parkeerlocatie.opmerkingen}
                            {/*OPENBAAR VERVOER BLOK-------------------- */}
                        </li>
                    )
                })}
                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1102PR")).map((filteredParking, index) => {
                    return (
                        <li id="parkinglocationdetails" key={filteredParking.parkeerlocatie.adres+index}>
                            <label id="Name">{filteredParking.parkeerlocatie.title}</label><br />
                            {filteredParking.parkeerlocatie.type}<br /><br />
                            {filteredParking.parkeerlocatie.adres} |
                            {filteredParking.parkeerlocatie.postcode} |
                            {filteredParking.parkeerlocatie.woonplaats}
                            {/*OPMERKINGEN BLOK-------------------- */}
                            {filteredParking.parkeerlocatie.opmerkingen}
                            {/*OPENBAAR VERVOER BLOK-------------------- */}
                        </li>
                    )
                })}
                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1103DS")).map((filteredParking, index) => {
                    return (
                        <li id="parkinglocationdetails" key={filteredParking.parkeerlocatie.adres+index}>
                            <label id="Name">{filteredParking.parkeerlocatie.title}</label><br />
                            {filteredParking.parkeerlocatie.type}<br /><br />
                            {filteredParking.parkeerlocatie.adres} |
                            {filteredParking.parkeerlocatie.postcode} |
                            {filteredParking.parkeerlocatie.woonplaats}
                            {/*OPMERKINGEN BLOK-------------------- */}
                            {filteredParking.parkeerlocatie.opmerkingen}
                            {/*OPENBAAR VERVOER BLOK-------------------- */}
                        </li>
                    )
                })}
            </div>
        </>
    );
}

export default LocationDetailsZuidOost;










