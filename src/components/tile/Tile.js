import React from 'react';
import "./Tile.css";

function Tile({ img, imgDescription, titlearea, textarea, children }) {
    return (
        <section>
            {img && <img src={img} alt={imgDescription}/>}
            <h2>{titlearea}</h2>
            <p>{textarea}</p>
            {children}

        </section>
    );
}
export default Tile;