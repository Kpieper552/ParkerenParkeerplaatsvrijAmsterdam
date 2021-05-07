import React from 'react';
import '../App.css';
import Tile from "../components/tile/Tile";
import amsterdam from "../assets/amsterdam.JPG";



function Account() {
    return (
        <>
            <div ><h1>ACCOUNT</h1>
                <Tile titlearea={"ACCOUNT"}/>
                <Tile titlearea={"ACCOUNT"}/>
                <Tile titlearea={"ACCOUNT"}/>
                <Tile img={amsterdam} imgDescription={amsterdam}/>
            </div>
        </>
    );
}
export default Account;