import React from 'react';
import "../contentbox/ContentBox.css";


function ContentBox( {titlecontentbox, subtitlecontentbox, children}) {
    return (
        <>
            <div id="parkingAdam-content-box">
                <h4> {titlecontentbox} </h4>
                <h3> {subtitlecontentbox}</h3>
                {children}
            </div>
        </>
    );
}
export default ContentBox;

