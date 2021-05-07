import React, {useState, useEffect}  from 'react';
import axios from "axios";


function LocationDetailsOost() {
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
            <div ><h2>Amsterdam Oost Parkeergarages Details</h2>
                {error && (<span>error </span>)}
                {loading && (<span>Loading...</span>)}

                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1093KP")).map((filteredParking) => {
                    console.log(filteredParking);
                    return (
                        <li id="parkinglocationdetails" key={filteredParking.id}>

                            <label id="Name">{filteredParking.parkeerlocatie.title}</label><br />
                            {filteredParking.parkeerlocatie.type}<br /><br />
                            {filteredParking.parkeerlocatie.adres}<br />
                            {filteredParking.parkeerlocatie.postcode}
                            {filteredParking.parkeerlocatie.woonplaats}<br /><br />
                            {/*OPMERKINGEN BLOK-------------------- */}
                            {filteredParking.parkeerlocatie.opmerkingen}<br /><br />
                            {/*OPENBAAR VERVOER BLOK-------------------- */}
                        </li>
                    )
                })}

                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1095")).map((filteredParking) => {
                    console.log(filteredParking);

                    return (
                        <li id="parkinglocationdetails" key={filteredParking.id}>

                            <label id="Name">{filteredParking.parkeerlocatie.title}</label><br />
                            {filteredParking.parkeerlocatie.type}<br /><br />
                            {filteredParking.parkeerlocatie.adres}<br />
                            {filteredParking.parkeerlocatie.postcode}
                            {filteredParking.parkeerlocatie.woonplaats}<br /><br />
                            {/*OPMERKINGEN BLOK-------------------- */}
                            {filteredParking.parkeerlocatie.opmerkingen}<br /><br />
                            {/*OPENBAAR VERVOER BLOK-------------------- */}
                        </li>
                    )
                })}
                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1097 BR")).map((filteredParking) => {
                    console.log(filteredParking);

                    return (
                        <li id="parkinglocationdetails" key={filteredParking.id}>

                            <label id="Name">{filteredParking.parkeerlocatie.title}</label><br />
                            {filteredParking.parkeerlocatie.type}<br /><br />
                            {filteredParking.parkeerlocatie.adres}<br />
                            {filteredParking.parkeerlocatie.postcode}
                            {filteredParking.parkeerlocatie.woonplaats}<br /><br />
                            {/*OPMERKINGEN BLOK-------------------- */}
                            {filteredParking.parkeerlocatie.opmerkingen}<br /><br />
                            {/*OPENBAAR VERVOER BLOK-------------------- */}
                        </li>
                    )
                })}
                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1098")).map((filteredParking) => {
                    console.log(filteredParking);

                    return (
                        <li id="parkinglocationdetails" key={filteredParking.id}>

                            <label id="Name">{filteredParking.parkeerlocatie.title}</label><br />
                            {filteredParking.parkeerlocatie.type}<br /><br />
                            {filteredParking.parkeerlocatie.adres}<br />
                            {filteredParking.parkeerlocatie.postcode}
                            {filteredParking.parkeerlocatie.woonplaats}<br /><br />
                            {/*OPMERKINGEN BLOK-------------------- */}
                            {filteredParking.parkeerlocatie.opmerkingen}<br /><br />
                            {/*OPENBAAR VERVOER BLOK-------------------- */}
                        </li>
                    )
                })}
                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1019")).map((filteredParking) => {
                    console.log(filteredParking);

                    return (
                        <li id="parkinglocationdetails" key={filteredParking.id}>

                            <label id="Name">{filteredParking.parkeerlocatie.title}</label><br />
                            {filteredParking.parkeerlocatie.type}<br /><br />
                            {filteredParking.parkeerlocatie.adres}<br />
                            {filteredParking.parkeerlocatie.postcode}
                            {filteredParking.parkeerlocatie.woonplaats}<br /><br />
                            {/*OPMERKINGEN BLOK-------------------- */}
                            {filteredParking.parkeerlocatie.opmerkingen}<br /><br />
                            {/*OPENBAAR VERVOER BLOK-------------------- */}
                        </li>
                    )
                })}


            </div>
        </>
    );
}

export default LocationDetailsOost;










