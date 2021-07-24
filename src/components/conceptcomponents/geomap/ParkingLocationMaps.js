import React, { useState} from 'react';
import ReactMapGL from "react-map-gl";


function ParkingLocationMaps() {
    const [viewport, setViewport] = useState({
        latitude: 52.37403,
        longitude: 4.88969,
        width: "100vw",
        height: "100vh",
        zoom: 10
    });

    return (
        <>
            <div>
                <ReactMapGL {...viewport}
                    mapboxApiAccesToken={"pk.eyJ1Ijoia2FyaW5hcGllcGVyIiwiYSI6ImNrbzRncjk2aTBibjIydm15eHk5aWRmZG8ifQ.YvF0NbAYkRvqUn__AGHL9g"}
                    onViewportChange={newView => setViewport(newView)}
                >
                <div> locations on map</div>
                </ReactMapGL>
          </div>
        </>
    );
}
export default ParkingLocationMaps;


