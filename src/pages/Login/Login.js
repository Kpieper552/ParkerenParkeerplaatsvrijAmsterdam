import React from 'react';
import '../../App.css';
import Tile from "../../components/tile/Tile";
import amsterdam from "../../assets/amsterdam.JPG";



function Login() {
    return (
        <>
            <Tile titlearea={"LOGIN"}/>
            <Tile titlearea={"LOGIN"}/>
            <Tile titlearea={"LOGIN"}/>
            <Tile img={amsterdam} imgDescription={amsterdam}/>

        </>
    );
}
export default Login;