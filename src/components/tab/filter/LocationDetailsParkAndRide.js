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
                {parkings.filter(parking => parking.parkeerlocatie.type.includes("P+R")).map((filteredParking, index) => {
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
                                |-> OV naar CENTRUM <br />
                                |->{filteredParking.parkeerlocatie.OV_bus}<br />
                                |->{filteredParking.parkeerlocatie.OV_tram}<br />
                                |->{filteredParking.parkeerlocatie.OV_metro}<br />
                                |->{filteredParking.parkeerlocatie.OV_trein}
                            </label>
                        </li>
                    )
                })}
            </div>
        </>
    );
}
export default LocationDetailsParkAndRide;


//                            {/*OPMERKINGEN BLOK-------------------- */}
//                             {filteredParking.parkeerlocatie.opmerkingen}
//                             {/*OPENBAAR VERVOER BLOK-------------------- */}
//                             {filteredParking.parkeerlocatie.OV_bus}<br /><br />
//                             {filteredParking.parkeerlocatie.OV_tram}<br /><br />
//                             {filteredParking.parkeerlocatie.OV_metro}<br /><br />
//                             {filteredParking.parkeerlocatie.OV_trein}<br /><br />







