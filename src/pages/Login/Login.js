import React from 'react';
import '../../App.css';
import Tile from "../../components/tile/Tile";
import kaart from "../../assets/kaart.jpg";



function Login() {
    return (
        <>
            <Tile img={kaart} imgDescription={kaart}/>
            <h1>LOGIN</h1>
            <Tile titlearea={"LOGIN"}/>
            <Tile titlearea={"LOGIN"}/>
            <Tile titlearea={"LOGIN"}/>


        </>
    );
}
export default Login;