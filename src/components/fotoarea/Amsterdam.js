import React from 'react';
//import '../../App.css';
import Tile from "../../components/tile/Tile";
import amsterdam from "../../assets/amsterdam.JPG";



function Amsterdam() {
    //const { user } = useContext(SignupContext)
    console.log("je bent nu op de accountpagina");
    return (
        <>
            <Tile img={amsterdam} imgDescription={amsterdam}/>
        </>
    );
}
export default Amsterdam;
