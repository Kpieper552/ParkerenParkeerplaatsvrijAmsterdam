import React  from 'react';
import '../../App.css';
import Tile from "../../components/tile/Tile";
import {
    NavLink,
} from 'react-router-dom';




function Home() {
    return (
        <>
            <div>
                <h1>Parkeren Amsterdam</h1>
                <Tile titlearea={"content"}/>
                <Tile titlearea="Locaties Centrum">
                    <div id="parkingAdam-weg">
                        <br/><br/>
                        <label id="parkingAdam-weg-streep">Parkeergarages ---- Parkeerplaatsen VRIJ  ---- Locatie gegevens ></label>
                        <NavLink to="/Parkeren-Amsterdam-Centrum" id="tabmenu"  ><button> P  </button></NavLink>
                        <br/><br/><br/>
                    </div>
                </Tile>
                <Tile titlearea="Locaties Park & Ride">
                    <div id="parkingAdam-weg">
                        Parkeergarages | Parkeerplaatsen VRIJ  | Locatie gegevens >
                        <NavLink to="/Parkeren-Amsterdam-ParkenRide" id="tabmenu"  ><button>  P</button></NavLink>
                    </div>
                </Tile>


                <Tile titlearea="Locaties Zuid & West">
                    <div id="parkingAdam-weg">
                        Parkeergarages | Parkeerplaatsen VRIJ  | Locatie gegevens >
                        <NavLink to="/Parkeren-Amsterdam-Stadsdelen-Zuid-West" id="tabmenu"  ><button>   P</button> </NavLink>

                    </div>
                </Tile>
                <Tile titlearea="Locaties Zuid-Oost & Oost">
                    <div id="parkingAdam-weg">
                        ️Parkeergarages | Parkeerplaatsen VRIJ  | Locatie gegevens >
                        <NavLink to="/Parkeren-Amsterdam-Stadsdelen-Oost-ZuidOost" id="tabmenu"  ><button> ️P</button> </NavLink>
                    </div>
                </Tile>
                <Tile titlearea={"content"}/>
            </div>
            {/*NAVIGATION-------------------- */}
        </>
    );
}
export default Home;