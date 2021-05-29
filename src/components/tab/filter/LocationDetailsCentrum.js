import React, {useState, useEffect}  from 'react';
import axios from "axios";


function LocationDetailsCentrum() {
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
                    {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1072AT")).map((filteredParking, index) => {
                        return (
                        <li id="parkinglocationdetails" key={filteredParking.parkeerlocatie.adres+index}>
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
                    {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1072NV")).map((filteredParking, index) => {
                        return (
                        <li id="parkinglocationdetails" key={filteredParking.parkeerlocatie.adres+index}>
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
                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1011 MP")).map((filteredParking, index) => {
                    return (
                    <li id="parkinglocationdetails" key={filteredParking.parkeerlocatie.adres+index}>
                            <label id="Name">{filteredParking.parkeerlocatie.title}</label><br />
                            <label id="MoreInfo">
                            {filteredParking.parkeerlocatie.adres} |
                            {filteredParking.parkeerlocatie.postcode} |
                            {filteredParking.parkeerlocatie.woonplaats}<br /><br />
                            {/*OPMERKINGEN BLOK-------------------- */}
                            </label>
                            <label id="MoreInfo">
                            {filteredParking.parkeerlocatie.opmerkingen}
                            {filteredParking.parkeerlocatie.type}<br /><br />
                            {/*OPENBAAR VERVOER BLOK-------------------- */}
                            </label>
                        </li>
                    )
                })}
                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1011AD")).map((filteredParking, index) => {
                    return (
                        <li id="parkinglocationdetails" key={filteredParking.parkeerlocatie.adres+index}>
                            <label id="Name">{filteredParking.parkeerlocatie.title}</label><br />
                            <label id="MoreInfo">
                            {filteredParking.parkeerlocatie.adres} |
                            {filteredParking.parkeerlocatie.postcode} |
                            {filteredParking.parkeerlocatie.woonplaats}<br /><br />
                            {/*OPMERKINGEN BLOK-------------------- */}
                            </label>
                            <label id="MoreInfo">
                            {filteredParking.parkeerlocatie.opmerkingen}
                            {filteredParking.parkeerlocatie.type}<br /><br />
                            {/*OPENBAAR VERVOER BLOK-------------------- */}
                            </label>
                        </li>
                    )
                })}
                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1011ND")).map((filteredParking, index) => {
                    return (
                        <li id="parkinglocationdetails" key={filteredParking.parkeerlocatie.adres+index}>
                            <label id="Name">{filteredParking.parkeerlocatie.title}</label><br />
                            <label id="MoreInfo">
                            {filteredParking.parkeerlocatie.adres} |
                            {filteredParking.parkeerlocatie.postcode} |
                            {filteredParking.parkeerlocatie.woonplaats}<br /><br />
                            {/*OPMERKINGEN BLOK-------------------- */}
                            </label>
                            <label id="MoreInfo">
                            {filteredParking.parkeerlocatie.opmerkingen}
                            {filteredParking.parkeerlocatie.type}<br /><br />
                            {/*OPENBAAR VERVOER BLOK-------------------- */}
                            </label>
                        </li>
                    )
                })}
                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1011PG")).map((filteredParking, index) => {
                    return (
                        <li id="parkinglocationdetails" key={filteredParking.parkeerlocatie.adres+index}>
                            <label id="Name">{filteredParking.parkeerlocatie.title}</label><br />
                            <label id="MoreInfo">
                            {filteredParking.parkeerlocatie.adres} |
                            {filteredParking.parkeerlocatie.postcode} |
                            {filteredParking.parkeerlocatie.woonplaats}<br /><br />
                            {/*OPMERKINGEN BLOK-------------------- */}
                            {filteredParking.parkeerlocatie.opmerkingen}
                            {filteredParking.parkeerlocatie.type}<br /><br />
                            {/*OPENBAAR VERVOER BLOK-------------------- */}
                            </label>
                        </li>
                    )
                })}
                {parkings.filter(parking => parking.parkeerlocatie.title.includes("Centraal Station")).map((filteredParking, index) => {
                    return (
                        <li id="parkinglocationdetails" key={filteredParking.parkeerlocatie.adres+index}>
                            <label id="Name">{filteredParking.parkeerlocatie.title}</label><br />
                            <label id="MoreInfo">
                            {filteredParking.parkeerlocatie.adres} |
                            {filteredParking.parkeerlocatie.postcode} |
                            {filteredParking.parkeerlocatie.woonplaats}<br /><br />
                            {/*OPMERKINGEN BLOK-------------------- */}
                            </label>
                            <label id="MoreInfo">
                            {filteredParking.parkeerlocatie.opmerkingen}
                            {filteredParking.parkeerlocatie.type}<br /><br />
                            {/*OPENBAAR VERVOER BLOK-------------------- */}
                            </label>
                        </li>
                    )
                })}
                {parkings.filter(parking => parking.parkeerlocatie.title.includes("IJ-zijde A")).map((filteredParking, index) => {
                    return (
                        <li id="parkinglocationdetails" key={filteredParking.parkeerlocatie.adres+index}>
                            <label id="Name">{filteredParking.parkeerlocatie.title}</label><br />
                            <label id="MoreInfo">
                            {filteredParking.parkeerlocatie.adres} |
                            {filteredParking.parkeerlocatie.postcode} |
                            {filteredParking.parkeerlocatie.woonplaats}<br /><br />
                            {/*OPMERKINGEN BLOK-------------------- */}
                            </label>
                            <label id="MoreInfo">
                            {filteredParking.parkeerlocatie.opmerkingen}
                            {filteredParking.parkeerlocatie.type}<br /><br />
                            {/*OPENBAAR VERVOER BLOK-------------------- */}
                            </label>
                        </li>
                    )
                })}
                {parkings.filter(parking => parking.parkeerlocatie.title.includes("Bijenkorf")).map((filteredParking, index) => {
                    return (
                        <li id="parkinglocationdetails" key={filteredParking.parkeerlocatie.adres+index}>
                            <label id="Name">{filteredParking.parkeerlocatie.title}</label><br />
                            <label id="MoreInfo">
                            {filteredParking.parkeerlocatie.adres} |
                            {filteredParking.parkeerlocatie.postcode} |
                            {filteredParking.parkeerlocatie.woonplaats}<br /><br />
                            {/*OPMERKINGEN BLOK-------------------- */}
                            </label>
                            <label id="MoreInfo">
                            {filteredParking.parkeerlocatie.opmerkingen}
                            {filteredParking.parkeerlocatie.type}<br /><br />
                            {/*OPENBAAR VERVOER BLOK-------------------- */}
                            </label>
                        </li>
                    )
                })}
                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1012KK")).map((filteredParking, index) => {
                    return (
                        <li id="parkinglocationdetails" key={filteredParking.parkeerlocatie.adres+index}>
                            <label id="Name">{filteredParking.parkeerlocatie.title}</label><br />
                            <label id="MoreInfo">
                            {filteredParking.parkeerlocatie.adres} |
                            {filteredParking.parkeerlocatie.postcode} |
                            {filteredParking.parkeerlocatie.woonplaats}<br /><br />
                            {/*OPMERKINGEN BLOK-------------------- */}
                            </label>
                            <label id="MoreInfo">
                            {filteredParking.parkeerlocatie.type}<br /><br />
                            {filteredParking.parkeerlocatie.opmerkingen}
                            {/*OPENBAAR VERVOER BLOK-------------------- */}
                            </label>
                        </li>
                    )
                })}
                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1012PV")).map((filteredParking, index) => {
                    return (
                        <li id="parkinglocationdetails" key={filteredParking.parkeerlocatie.adres+index}>
                            <label id="Name">{filteredParking.parkeerlocatie.title}</label><br />
                            <label id="MoreInfo">
                            {filteredParking.parkeerlocatie.adres} |
                            {filteredParking.parkeerlocatie.postcode} |
                            {filteredParking.parkeerlocatie.woonplaats}<br /><br />
                            {/*OPMERKINGEN BLOK-------------------- */}
                            </label>
                            <label id="MoreInfo">
                            {filteredParking.parkeerlocatie.opmerkingen}
                            {filteredParking.parkeerlocatie.type}<br /><br />
                            {/*OPENBAAR VERVOER BLOK-------------------- */}
                            </label>
                        </li>
                    )
                })}
                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1012TL")).map((filteredParking, index) => {
                    return (
                        <li id="parkinglocationdetails" key={filteredParking.parkeerlocatie.adres+index}>
                            <label id="Name">{filteredParking.parkeerlocatie.title}</label><br />
                            <label id="MoreInfo">
                            {filteredParking.parkeerlocatie.adres} |
                            {filteredParking.parkeerlocatie.postcode} |
                            {filteredParking.parkeerlocatie.woonplaats}<br /><br />
                            {/*OPMERKINGEN BLOK-------------------- */}
                            </label>
                            <label id="MoreInfo">
                            {filteredParking.parkeerlocatie.opmerkingen}
                            {filteredParking.parkeerlocatie.type}<br /><br />
                            {/*OPENBAAR VERVOER BLOK-------------------- */}
                            </label>
                        </li>
                    )
                })}
                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1013")).map((filteredParking, index) => {
                    return (
                        <li id="parkinglocationdetails" key={filteredParking.parkeerlocatie.adres+index}>
                            <label id="Name">{filteredParking.parkeerlocatie.title}</label><br />
                            <label id="MoreInfo">
                            {filteredParking.parkeerlocatie.adres} |
                            {filteredParking.parkeerlocatie.postcode} |
                            {filteredParking.parkeerlocatie.woonplaats}<br /><br />
                            {/*OPMERKINGEN BLOK-------------------- */}
                            </label>
                            <label id="MoreInfo">
                            {filteredParking.parkeerlocatie.opmerkingen}
                            {filteredParking.parkeerlocatie.type}<br /><br />
                            {/*OPENBAAR VERVOER BLOK-------------------- */}
                            </label>
                        </li>
                    )
                })}
                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1016TL")).map((filteredParking, index) => {
                    return (
                        <li id="parkinglocationdetails" key={filteredParking.parkeerlocatie.adres+index}>
                            <label id="Name">{filteredParking.parkeerlocatie.title}</label><br />
                            <label id="MoreInfo">
                            {filteredParking.parkeerlocatie.adres} |
                            {filteredParking.parkeerlocatie.postcode} |
                            {filteredParking.parkeerlocatie.woonplaats}<br /><br />
                            {/*OPMERKINGEN BLOK-------------------- */}
                            </label>
                            <label id="MoreInfo">
                            {filteredParking.parkeerlocatie.opmerkingen}
                            {filteredParking.parkeerlocatie.type}<br /><br />
                            {/*OPENBAAR VERVOER BLOK-------------------- */}
                            </label>
                        </li>
                    )
                })}
                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1017 DA")).map((filteredParking, index) => {

                    return (
                        <li id="parkinglocationdetails" key={filteredParking.parkeerlocatie.adres+index}>
                            <label id="Name">{filteredParking.parkeerlocatie.title}</label><br />
                            <label id="MoreInfo">
                            {filteredParking.parkeerlocatie.adres} |
                            {filteredParking.parkeerlocatie.postcode} |
                            {filteredParking.parkeerlocatie.woonplaats}<br /><br />
                            {/*OPMERKINGEN BLOK-------------------- */}
                            </label>
                            <label id="MoreInfo">
                            {filteredParking.parkeerlocatie.opmerkingen}
                            {filteredParking.parkeerlocatie.type}<br /><br />
                            {/*OPENBAAR VERVOER BLOK-------------------- */}
                            </label>
                        </li>
                    )
                })}
                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1017HL")).map((filteredParking, index) => {
                    return (
                        <li id="parkinglocationdetails" key={filteredParking.parkeerlocatie.adres+index}>
                            <label id="Name">{filteredParking.parkeerlocatie.title}</label><br />
                            <label id="MoreInfo">
                            {filteredParking.parkeerlocatie.adres} |
                            {filteredParking.parkeerlocatie.postcode} |
                            {filteredParking.parkeerlocatie.woonplaats}<br /><br />
                            {/*OPMERKINGEN BLOK-------------------- */}
                            </label>
                            <label id="MoreInfo">
                            {filteredParking.parkeerlocatie.opmerkingen}
                            {filteredParking.parkeerlocatie.type}<br /><br />
                            {/*OPENBAAR VERVOER BLOK-------------------- */}
                            </label>
                        </li>
                    )
                })}
                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1054 CV")).map((filteredParking, index) => {
                    return (
                        <li id="parkinglocationdetails" key={filteredParking.parkeerlocatie.adres+index}>
                            <label id="Name">{filteredParking.parkeerlocatie.title}</label><br />
                            <label id="MoreInfo">
                            {filteredParking.parkeerlocatie.adres} |
                            {filteredParking.parkeerlocatie.postcode} |
                            {filteredParking.parkeerlocatie.woonplaats}<br /><br />
                            {/*OPMERKINGEN BLOK-------------------- */}
                            </label>
                            <label id="MoreInfo">
                            {filteredParking.parkeerlocatie.opmerkingen}
                            {filteredParking.parkeerlocatie.type}<br /><br />
                            {/*OPENBAAR VERVOER BLOK-------------------- */}
                            </label>
                        </li>
                    )
                })}
                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1022BP")).map((filteredParking, index) => {
                    return (
                        <li id="parkinglocationdetails" key={filteredParking.parkeerlocatie.adres+index}>
                            <label id="Name">{filteredParking.parkeerlocatie.title}</label><br />
                            <label id="MoreInfo">
                            {filteredParking.parkeerlocatie.adres} |
                            {filteredParking.parkeerlocatie.postcode} |
                            {filteredParking.parkeerlocatie.woonplaats}<br /><br />
                            {/*OPMERKINGEN BLOK-------------------- */}
                            </label>
                            <label id="MoreInfo">
                            {filteredParking.parkeerlocatie.opmerkingen}
                            {filteredParking.parkeerlocatie.type}<br /><br />
                            {/*OPENBAAR VERVOER BLOK-------------------- */}
                            </label>
                        </li>
                    )
                })}
                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1025")).map((filteredParking, index) => {
                    return (
                        <li id="parkinglocationdetails" key={filteredParking.parkeerlocatie.adres+index}>
                            <label id="Name">{filteredParking.parkeerlocatie.title}</label><br />
                            <label id="MoreInfo">
                            {filteredParking.parkeerlocatie.adres} |
                            {filteredParking.parkeerlocatie.postcode} |
                            {filteredParking.parkeerlocatie.woonplaats}<br /><br />
                            {/*OPMERKINGEN BLOK-------------------- */}
                            </label>
                            <label id="MoreInfo">
                            {filteredParking.parkeerlocatie.type}<br /><br />
                            {filteredParking.parkeerlocatie.opmerkingen}
                            {/*OPENBAAR VERVOER BLOK-------------------- */}
                            </label>
                        </li>
                    )
                })}
                {parkings.filter(parking => parking.parkeerlocatie.postcode.includes("1034")).map((filteredParking, index) => {
                    return (
                        <li id="parkinglocationdetails" key={filteredParking.parkeerlocatie.adres+index}>
                            <label id="Name">{filteredParking.parkeerlocatie.title}</label><br />
                            <label id="MoreInfo">
                            {filteredParking.parkeerlocatie.adres} |
                            {filteredParking.parkeerlocatie.postcode} |
                            {filteredParking.parkeerlocatie.woonplaats}<br /><br />
                            {/*OPMERKINGEN BLOK-------------------- */}
                            </label>
                            <label id="MoreInfo">
                            {filteredParking.parkeerlocatie.type}<br /><br />
                            {filteredParking.parkeerlocatie.opmerkingen}
                            {/*OPENBAAR VERVOER BLOK-------------------- */}
                            </label>
                        </li>
                    )
                })}
            </div>
        </>
    );
}

export default LocationDetailsCentrum;










