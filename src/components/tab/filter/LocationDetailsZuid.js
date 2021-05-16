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
            <div >
                {error && (<span>error </span>)}
                {loading && (<span>Loading...</span>)}
                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1071AP")).map((filteredParking, index) => {
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
                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1072AT")).map((filteredParking, index) => {
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
                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1072NV")).map((filteredParking, index) => {
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
                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1076DE")).map((filteredParking, index) => {
                    return (
                        <li id="parkinglocationdetails" key={filteredParking.parkeerlocatie.adres+index}>
                            <label id="Name">{filteredParking.parkeerlocatie.title}</label><br />
                            {filteredParking.parkeerlocatie.type}<br /><br />
                            {filteredParking.parkeerlocatie.adres} |
                            {filteredParking.parkeerlocatie.postcode}
                            {filteredParking.parkeerlocatie.woonplaats} |
                            {/*OPMERKINGEN BLOK-------------------- */}
                            {filteredParking.parkeerlocatie.opmerkingen}
                            {/*OPENBAAR VERVOER BLOK-------------------- */}
                        </li>
                    )
                })}
                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1078")).map((filteredParking, index) => {
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
                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1081 LA")).map((filteredParking, index) => {
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
                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1082 GC")).map((filteredParking, index) => {
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
                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1082 MP")).map((filteredParking, index) => {
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
                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1082 MD")).map((filteredParking, index) => {
                    console.log(filteredParking);
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
                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1182 AG")).map((filteredParking, index) => {
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
                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1083HN")).map((filteredParking, index) => {
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
                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1114bd")).map((filteredParking, index) => {
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

export default LocationDetailsZuid;










