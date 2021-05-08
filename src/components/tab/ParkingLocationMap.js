import React, { useState} from 'react';
import ReactMapGL from "react-map-gl";



function ParkingLocationMap() {
    const [viewport, setViewport] = useState({
        latitude: 52.37403,
        longitude: 4.88969,
        width: "100vw",
        height: "100vh",
        zoom: 10
    });



//console.log(process.env.REACT_APP_MAPBOX_TOKEN, "token map!!!");
//de console log en token heb ik even uitgezet.
    return (
        <>
            <div>
                <ReactMapGL {...viewport}
                    //mapboxApiAccesToken={process.env.REACT_APP_MAPBOX_TOKEN}
                    onViewportChange={viewport => {
                        setViewport(viewport);
                        }}
                >
                <div> locations on map</div>
                </ReactMapGL>
          </div>
        </>
    );
}
export default ParkingLocationMap;


