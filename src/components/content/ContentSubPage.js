import React from 'react';
import '../../App.css';
import {NavLink} from "react-router-dom";




function ContentSubPage() {

    return (
        <>
            <h5>
            <div id="parkingAdam-content-deel">
               <br/><br/>
                    Parkeerplaats VRIJ Kort Parkeren (per uur/dag 0-24 uur)
               <br/><br/>
               <br/><br/>
                    Actueel beschikbare plaatsen parkeergarages Amsterdam
               <br/><br/>
                <br/><br/>
                    Parkeergarages locatie informatie
               <br/><br/>
               <br/>
               <NavLink to="/login" activeClassName="activelink">
               <button id="button-subpage"><h6>Parkeer garages Locatie informatie uitgebreid</h6></button>
               </NavLink>
               <br/><br/><br/>
            </div>
            </h5>
        </>
    );
}
export default ContentSubPage;

