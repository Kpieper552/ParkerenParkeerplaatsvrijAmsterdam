import React, { useState} from 'react';
import ReactMapGL from "react-map-gl";

const mapboxApiAccesToken='pk.eyJ1Ijoia2FyaW5hcGllcGVyIiwiYSI6ImNrb2JsbXp0MjFlNWwycXFrMmZ6NG4yOWoifQ.SCXs3rjvsATv5qSM1AZ23w'
function ParkingLocationMaps() {
    const [viewport, setViewport] = useState({
        latitude: 52.37403,
        longitude: 4.88969,
        width: "100vw",
        height: "100vh",
        zoom: 10
    });


//console.log(mapboxApiAccesToken, "token map!!!");
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
export default ParkingLocationMaps;


