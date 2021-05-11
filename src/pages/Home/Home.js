import React  from 'react';
import '../../App.css';
import Tile from "../../components/tile/Tile";
import ParkingLocationFiets from "../../components/tab/ParkingLocationFiets";
import amsterdam from "../../assets/amsterdam.JPG";
import carparking from "../../assets/carparking.jpg";


function Home() {
    return (
        <>
            <Tile img={amsterdam} imgDescription={amsterdam}/>
            <div><h1>Parkeren Amsterdam</h1>
            <div>
                <Tile img={carparking} imgDescription={carparking}/>
                <Tile titlearea={"PARKEREN AMSTERDAM "}/>
                <Tile titlearea={"PlAATSEN VRIJ ? "}/>
                <Tile titlearea={"CONTENT"}/>
             <Tile>
                 <div id="parkingAdam-weg-deel">informatie<br/><br/>
                 <ParkingLocationFiets/>
                     informatie<br/><br/>
                     informatie<br/><br/>
                 </div><br/>
                 <div id="home-Page-weg" >
                     <div className="label-weg"> <h1> </h1>in Amsterdam is niet duur</div><br/>
                     <div className="label-weg"> <h1> </h1>in Amsterdam is niet duur</div><br/>
                 </div><br/>
                <div id="parkingAdam-weg-deel"> informatie<br/><br/>
                    <ParkingLocationFiets/>
                    informatie<br/><br/>
                    informatie<br/><br/>
                </div>
                </Tile>

            </div>
            </div>

        </>
    );
}
export default Home;