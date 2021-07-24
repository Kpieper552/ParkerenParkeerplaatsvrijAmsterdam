import React from 'react';
import '../content/Content.css';
import {NavLink} from "react-router-dom";




function ContentSubPage() {

    return (
        <>
            <h5>
            <div id="parkingAdam-content-box">
               <br/><br/>
                    Parkeerplaats VRIJ Kort Parkeren (per uur/dag 0-24 uur)
               <br/><br/>
               <br/><br/>
                    Actueel beschikbare plaatsen parkeergarages Amsterdam
               <br/><br/>
                <br/><br/>
                    Parkeer locatie's informatie
               <br/><br/>
               <br/>
               <NavLink to="/account" activeClassName="activelink">
               <button id="button-subpage"><h6>Parkeer locatie's informatie uitgebreid</h6></button>
               </NavLink>
               <br/><br/><br/>
            </div>
            </h5>
        </>
    );
}
export default ContentSubPage;

