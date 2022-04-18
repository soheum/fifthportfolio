import React from 'react';
import './Dhm.css';
import WorkTitle from './WorkTitle/WorkTitle';
import { WorkSeven } from './WorkTitle/Data';
import WorkSemititle from './WorkTitle/WorkSemititle';
import HeroSection  from '../HeroSection';
import { workObjSeven } from '../HomePage/Data';
import ReactPlayer from "react-player";


function Dhm() {
    return (
        <>
        <div>
        <HeroSection {...workObjSeven} />
        <WorkTitle {...WorkSeven} />
        </div>

        <div className="container" id="dhm_question">
            <img className="joul_img" src={"./images/dhm/hmw.jpg"} /> <br />
            <div className="container_question_dhm">
                <span className="question">How might we redefine the process of </span>
                <span className="emphasize_dhm">remote CPR,</span> <br />        
                <span className="question">where dispatchers assist bystanders via remote communication?</span> <br /> <br />    
            </div>

            <div className="container_semititle">
                <span className="emphasize_dhm">key components</span> <br /> <br />
                <span className="content_title">01. CURRENT SCENARIO: TASK ANALYSIS</span> 
            </div>
            <div className="container player-wrapper">
                <ReactPlayer className="react-player" width="100%" height="100%" url="https://vimeo.com/691532230" />
            </div> <br /><br /><br />
            <span className="content_title">02. FUTURE SCENARIO: SPECULATIVE DESIGN</span> <br /><br />
            <div className="container_how">
                <img className="joul_img" src={"./images/dhm/1.jpg"} />
            </div>
            <div className="container_how">
                <img className="joul_img" src={"./images/dhm/futurescenario.jpg"} />
            </div>
        </div>
        <div className="container">
        
            <div className="container_semititle">
            <hr></hr> <br /><br />
                <span className="more">MORE PROCESS TO COME UP SOON!</span>
            </div>
        </div>
        <div className="footer"></div>
        </>
    );
}

export default Dhm;