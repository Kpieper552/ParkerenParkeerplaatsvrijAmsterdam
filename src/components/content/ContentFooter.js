import React from 'react';
import '../content/Content.css';
import {NavLink} from "react-router-dom";
import ContentBox from "../contentbox/ContentBox";



function ContentFooter() {

    return (
        <>
            <ContentBox titlecontentbox="PARKEREN PARKEERPLAATS VRIJ AMSTERDAM">
                <NavLink to="/home"> <button> | Home  |</button></NavLink><br/><br/>
                <div id="moreInfo-box" >©KarinaPieper</div><div id="moreInfo-box" > Contact: k.pieper@hotmail.com<br/></div>
            </ContentBox>
        </>
    );
}
export default ContentFooter;

