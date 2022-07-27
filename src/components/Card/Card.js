import React from "react";
import './Card.css';



const Card = (props) => {
    return(
        <div className="card">
            <img src={props.emogi} alt='emogi'/>
            <span>{props.heading}</span>
            <span>{props.detail}</span>
            <button className="c-button">LEARN MORE</button>
        </div>
    )
}


export default Card