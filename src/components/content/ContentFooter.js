import React from 'react';
import '../content/Content.css';
import {NavLink} from "react-router-dom";




function ContentFooter() {

    return (
        <>
            <div id="parkingAdam-content-box">
                <NavLink to="/home"> <button> | Home  |</button></NavLink><br/>
                <h4>PARKEREN PARKEERPLAATS VRIJ AMSTERDAM</h4>
                <div id="moreInfo-box" >©KarinaPieper</div><div id="moreInfo-box" > Contact: k.pieper@hotmail.com<br/></div>
            </div>
        </>
    );
}
export default ContentFooter;

