import React from 'react';
import './Trapeza.css';
import WorkTitle from './WorkTitle/WorkTitle';
import { WorkEight } from './WorkTitle/Data';
import WorkSemititle from './WorkTitle/WorkSemititle';
import HeroSection  from '../HeroSection';
import { workObjEight } from '../HomePage/Data';
import ReactPlayer from "react-player";


function Trapeza() {
    return (
        <>
        <div>
        <HeroSection {...workObjEight} />
        <WorkTitle {...WorkEight} />
        </div>

        <div className="container" id="trapeza_question">
            <a href="https://www.trapeza.finance/">
                <img className="joul_img" src={"./images/trapeza/hmw.jpg"} /> <br />
            </a>
        </div>

        <div className="footer"></div>
        </>
    );
}

export default Trapeza;