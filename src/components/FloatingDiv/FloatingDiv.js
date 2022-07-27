import React from "react";
import "./Floating.css"

const FloatingDiv = (props) => {

    return(
        <div className="floatingdiv">
            <img src={props.image} alt={props.image}/>
            <span>
                {props.txt1}
                <br/>
                {props.txt2}
            </span>
        </div>
    )

}

export default FloatingDiv