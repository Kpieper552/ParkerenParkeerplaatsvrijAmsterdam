import React  from 'react';
import '../../App.css';
import Tile from "../../components/tile/Tile";
import carparking from "../../assets/carparking.jpg";
import kaart from "../../assets/kaart.jpg"


function Home() {
    return (
        <>
            <Tile img={kaart} imgDescription={kaart}/>
            <div><h1>Parkeren Amsterdam</h1></div>
                <Tile img={carparking} imgDescription={carparking}/>
                <Tile titlearea={"PARKEREN AMSTERDAM "}/>
                <Tile titlearea={"PlAATSEN VRIJ content ? "}/>
                <Tile>
                     <div id="parkingAdam-weg-deel">
                         <div className="label-weg"> Kort Parkeren in Amsterdam</div><br/>
                         informatie<br/><br/>
                         <br/><label id="button-page">Locaties kort parkeren Centrum</label>
                         informatie<br/><br/>
                         <br/><label id="button-page">Locaties kort parkeren Park & Ride</label>
                         informatie<br/><br/>
                         <div className="label-weg"> Login en/of Registreer voor meer toegang</div><br/>
                         <br/><label id="button-page">Login / Register </label>
                     </div>

                    <div id="home-Page-weg">
                        <div className="label-weg">Kort Parkeren in Amsterdam</div><br/>
                        informatie<br/><br/>
                        <div className="label-weg">Lang Parkeren in Amsterdam</div><br/>
                    </div><br/>

                     <div id="parkingAdam-weg-deel">
                         <div className="label-weg">Kort Parkeren in Amsterdam</div><br/>                         informatie<br/><br/>

                         <br/><label id="button-page">Locaties kort parkeren Stadsdelen Zuid en Zuid-Oost</label>
                         informatie<br/><br/>
                         <br/><label id="button-page">Locaties kort parkeren Stadsdelen Zuid en West</label>
                         informatie<br/><br/>
                         <div className="label-weg"> Lang Parkeren in Amsterdam</div><br/>
                         <br/><label id="button-page">Locaties Lang parkeren</label>
                    </div>
               </Tile>
            <Tile img={carparking} imgDescription={carparking}/>
        </>
    );
}
export default Home;