import React, {useState, useEffect}  from 'react';
import axios from "axios";
import '../parkinglocationdetails/ParkingLocationDetails.css';

function ParkingLocationDetails() {
    const [parkings, setParkings] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('https://open.data.amsterdam.nl/ivv/parkeren/locaties.json');
                setParkings(response.data.parkeerlocaties);
         } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <div >
                <h2>Parkeergarages Locatie detail informatie</h2>
                    {parkings && parkings.map((parking, index) => {
                        return (
                        <li id="parkinglocationdetails" key={parking.parkeerlocatie.adres+index}>
                            <label id="Name">{parking.parkeerlocatie.title}
                            </label>
                            <label id="MoreInfo">
                            {parking.parkeerlocatie.adres}|
                            {parking.parkeerlocatie.postcode} |
                            {parking.parkeerlocatie.woonplaats} |
                            </label><br/>
                            <label id="MoreInfo">
                                |> {parking.parkeerlocatie.type}
                                    {/*OPENBAAR VERVOER BLOK-------------------- */}<br/>
                                    {parking.parkeerlocatie.OV_bus} <br/>
                                    {parking.parkeerlocatie.OV_tram} <br/>
                                    {parking.parkeerlocatie.OV_metro} <br/>
                                    {parking.parkeerlocatie.OV_trein} <br/>
                                    {/*OPMERKINGEN BLOK-------------------- */}<br/>
                                    {parking.parkeerlocatie.opmerkingen}
                                    {/*externe verwijzing BLOK-------------------- */}<br />
                                |> {parking.parkeerlocatie.url}<br />
                                |> {parking.parkeerlocatie.urltitle}
                            </label>
                        </li>
                        )
                    })}
            </div>
        </>
    );
}

export default ParkingLocationDetails;











