import React, {useState, useEffect}  from 'react';
import axios from "axios";


function LocationDetailsZuid() {
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
            <div ><h2>Amsterdam Zuid Parkeergarages Details</h2>
                {error && (<span>error </span>)}
                {loading && (<span>Loading...</span>)}
                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1071AP")).map((filteredParking, index) => {
                    return (
                        <li id="parkinglocationdetails" key={index}>
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
                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1072AT")).map((filteredParking, index) => {
                    return (
                        <li id="parkinglocationdetails" key={index}>
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
                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1072NV")).map((filteredParking, index) => {
                    return (
                        <li id="parkinglocationdetails" key={index}>
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
                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1076DE")).map((filteredParking, index) => {
                    return (
                        <li id="parkinglocationdetails" key={index}>
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
                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1078")).map((filteredParking, index) => {
                    return (
                        <li id="parkinglocationdetails" key={index}>
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
                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1081 LA")).map((filteredParking, index) => {
                    console.log(filteredParking);

                    return (
                        <li id="parkinglocationdetails" key={index}>

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
                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1082 GC")).map((filteredParking, index) => {
                    return (
                        <li id="parkinglocationdetails" key={index}>

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
                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1082 MP")).map((filteredParking, index) => {
                     return (
                        <li id="parkinglocationdetails" key={index}>

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

                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1082 MD")).map((filteredParking, index) => {
                    console.log(filteredParking);

                    return (
                        <li id="parkinglocationdetails" key={index}>
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

                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1083HN")).map((filteredParking, index) => {
                    return (
                        <li id="parkinglocationdetails" key={index}>
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
                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1083HN")).map((filteredParking, index) => {
                    console.log(filteredParking);
                    return (
                        <li id="parkinglocationdetails" key={index}>
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
                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1114bd")).map((filteredParking, index) => {
                    return (
                        <li id="parkinglocationdetails" key={index}>
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

export default LocationDetailsZuid;










