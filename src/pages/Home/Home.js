import React  from 'react';
import '../Home/Home.css';
import Tile from "../../components/tile/Tile";
import carparking from "../../assets/carparking.jpg";
import { NavLink } from 'react-router-dom';
import ContentPage from "../../components/content/ContentPage";

function Home() {
    return (
        <>
            <div><h3>Parkeren Amsterdam</h3></div>
                <Tile img={carparking} imgDescription={carparking}/>
                <Tile titlearea={"KORT PARKEREN PER STADSDEEL "}/>
                <Tile>
                     <div id="homepage-weg">
                         <div className="homepage-weg-deel">
                         </div>
                         <NavLink to="/parkeren-amsterdam-centrum" id="button-page"><h4>|>Locaties Centrum</h4></NavLink>
                         <NavLink to="/parkeren-amsterdam-Stadsdelen-Oost-ZuidOost" id="button-page"><h4>|>Locaties Oost</h4></NavLink>
                         <NavLink to="/parkeren-amsterdam-Stadsdelen-Zuid-West" id="button-page"><h4>|>Locaties West</h4></NavLink>
                     </div>
                    <div id="homepage-weg">
                        <div>
                            <ContentPage/>
                        </div>
                    </div>
                     <div id="homepage-weg">
                         <div className="homepage-weg-deel">
                         </div>
                         <NavLink to="/parkeren-amsterdam-centrum" id="button-page"><h4>|>Locaties Noord</h4></NavLink>
                         <NavLink to="/parkeren-amsterdam-Stadsdelen-Zuid-West" id="button-page"><h4>|>Locaties Zuid</h4></NavLink>
                         <NavLink to="/parkeren-amsterdam-Stadsdelen-Oost-ZuidOost" id="button-page"><h4>|>Locaties Zuid-Oost</h4></NavLink>
                    </div>
                </Tile>
            <Tile />
        </>
    );
}
export default Home;