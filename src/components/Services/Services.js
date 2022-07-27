import React from "react";
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Card from "../Card/Card.js";
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';


const Services = () => {
    return(
        <div className="services">
            <div className="awesome">
                <span>Our Awesome</span>
                <span>Services</span>
                <span>
                    We can develope your profesional website and <br />
                    your web application for your buisness
                </span>
                <button className="button s-button">Check our Team Members</button>
                <div className="blur s-blurl" style={{background: '#abf1ff94',}}></div>
            </div>
            <div className="cards">
                <div style={{left: "27rem"}}>
                    <Card 
                        emogi={HeartEmoji}
                        heading='skills'
                        detail = "Good treatment & communication with our client"
                    />
                </div>
                <div style={{top: '12rem', left: "4rem"}}>
                    <Card 
                        emogi={Glasses}
                        heading='Tools'
                        detail = "Html , Css, javascript, React, jQuery, Django, Laravel, mySQL, sqlite3"
                    />
                </div>
                <div style={{top: '20rem', left: "22rem"}}>
                    <Card 
                        emogi={Humble}
                        heading='More'
                        detail = "Code Hosting on Github, or whatever you choose + hosting service if its nessessary"
                    />
                </div>
                <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
            </div>
        </div>
    )
}
export default Services


