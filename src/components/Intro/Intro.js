import React from "react";
import './Intro.css';
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import FloatingDiv from "../FloatingDiv/FloatingDiv.js";
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'

const Intro = () =>  {

    return(

        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hi! We are</span>
                    <span>United Web Team</span>
                    <span>
                        Our team members are very talented with high level of experience
                        in web developing
                    </span>
                </div>
                <div className="button i-button">
                    Hire us
                </div>
                <div className="i-icons">
                    <a href="/"><img src={Github} alt=''/></a>
                    <a href="/"><img src={LinkedIn} alt=''/></a>
                    <a href="/"><img src={Instagram} alt=''/></a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="Vector1"/>
                <img src={Vector2} alt="Vector2"/>
                <img src={boy} alt="boy"/>
                <img src={glassesimoji} alt='glassesimoji'/>
                <div style={{top: '-4%', left: '68%'}}>
                    <FloatingDiv image={Crown} txt1='Web' txt2='Developers'/>
                </div>
                <div style={{top: '18rem', left: '0rem'}}>
                    <FloatingDiv image={thumbup} txt1='Using The' txt2='Best Web Frameworks'/>
                </div>
                <div className="blur" style={{background: "rbga(238 210 255)"}}></div>
                <div className="blur" style={{
                    background: "#c1f5ff",
                    top: '17rem',
                    width: '21rem',
                    height: '11rem',
                    left: '-9rem',
                }}></div>
            </div>
        </div>
    
    )


}

export default Intro