import React, {useState, useEffect}  from 'react';
import axios from "axios";
import "../filterparking/FilterParking.css";
import parkingLocationDataRequest from "../../../helper/parkingLocationDataRequest";

function LocationDetailsOost() {
    const [parkings, setParkings] = useState([]);
    const [error, setError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(parkingLocationDataRequest());
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
                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1093KP")).map((filteredParking, index) => {
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

                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1095")).map((filteredParking, index) => {
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
                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1097 BR")).map((filteredParking, index) => {
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
                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1098")).map((filteredParking, index) => {
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
                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1019")).map((filteredParking, index) => {
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

export default LocationDetailsOost;










