import React from "react";
import "./App.css";

const Card = ({nombre, colorDeTinte}) => {

    return (
        <div style={{border:"2px solid black", padding:"2%", width:"80%"}}>
            <h2>Listo, {nombre}!</h2>
            <h3>El color tinte que escogiste es: {colorDeTinte} </h3>
        </div>
    )
};

export default Card;