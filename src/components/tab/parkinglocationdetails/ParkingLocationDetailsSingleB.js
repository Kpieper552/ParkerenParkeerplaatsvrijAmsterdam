import React, {useState, useEffect}  from 'react';
import axios from "axios";


function LocationDetailsSingleB() {
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
                {parkings.filter(parking => parking.parkeerlocatie.title.includes("P1 ArenA")).map((filteredParking, index) => {
                    return (
                        <li id="parkinglocationdetails" key={filteredParking.parkeerlocatie.adres+index}>
                            <label id="Name">{filteredParking.parkeerlocatie.title}</label><br />
                            <label id="MoreInfo">
                                {filteredParking.parkeerlocatie.adres}
                                {filteredParking.parkeerlocatie.postcode}
                                {filteredParking.parkeerlocatie.woonplaats}<br /><br />
                            </label><br />
                            <label id="MoreInfo">{filteredParking.parkeerlocatie.type} <br/>
                                {/*OPENBAAR VERVOER BLOK-------------------- */}
                                {filteredParking.parkeerlocatie.OV_bus}<br />
                                {filteredParking.parkeerlocatie.OV_tram}<br />
                                {filteredParking.parkeerlocatie.OV_metro}<br />
                                {filteredParking.parkeerlocatie.OV_trein}
                                {/*OPMERKINGEN BLOK-------------------- */}<br/>
                                {filteredParking.parkeerlocatie.opmerkingen}
                                {/*externe verwijzing BLOK-------------------- */}<br />
                                |> {filteredParking.parkeerlocatie.url}<br />
                                |> {filteredParking.parkeerlocatie.urltitle}
                            </label>
                        </li>
                    )
                })}
            </div>
        </>
    );
}
export default LocationDetailsSingleB;









