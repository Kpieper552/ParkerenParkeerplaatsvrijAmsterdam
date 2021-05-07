import React, {useState, useEffect}  from 'react';
import axios from "axios";


function ParkingTarifs() {
    const [parkingTarifs, setParkingTarifs] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('https://amsterdam-maps.bma-collective.com/embed/parkeren/deploy_data/tarieven.json');
                setParkingTarifs(response.data);
                console.log("halloDIT IS DATA UIT TARIEVEN!!!!", response.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);

    console.log(parkingTarifs);

    return (
        <ul>

        </ul>

    )
}
export default ParkingTarifs;




//   {parkingTarifs && parkingTarifs.map((parkingTarif) => {
//                 console.log(parkingTarif);
//                 return (<li >
//                         <br />
//                        wat zijn
//                     </li>
//
//                 )
//             })}


