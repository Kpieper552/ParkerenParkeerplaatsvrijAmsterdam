import React from 'react';
import '../../App.css';
import Tile from "../../components/tile/Tile";
import amsterdam from "../../assets/amsterdam.JPG";



function SignUp() {
    return (
        <>
            <div ><h1>REGISTREER</h1>
                <Tile titlearea={"REGISTREER"}/>
                <Tile titlearea={"REGISTREER"}/>
                <Tile titlearea={"REGISTREER"}/>
                <Tile img={amsterdam} imgDescription={amsterdam}/>
            </div>

        </>
    );
}
export default SignUp;