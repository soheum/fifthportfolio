import React from 'react';
import './Qcells.css';
import WorkTitle from './WorkTitle/WorkTitle';
import { WorkNine } from './WorkTitle/Data';
import WorkSemititle from './WorkTitle/WorkSemititle';
import HeroSection  from '../HeroSection';
import { workObjNine } from '../HomePage/Data';
import ReactPlayer from "react-player";


function Qcells() {
    return (
        <>
        <div>
        <HeroSection {...workObjNine} />
        <WorkTitle {...WorkNine} />
        </div>

        <div className="container" >
            <a href="https://qcells.com/ane/stay-in-the-loop/eco-charged-community/stories">
            <img className="joul_img" src={"./images/qcells/hmw.png"} /></a> <br />
        </div>
        <img className="joul_img" src={"./images/qcells/mainlink_qcells.jpg"} />
        <div className="container">
            <div className="container_semititle">
                <span className="emphasize_qcells">filming process</span>
            </div>
            <div className="discover_interview">
                    <span className="question_title_seam">Home visit interviews across the States</span> <br /> <br /> <br />
                    <span className="content_text">In total we conducted </span><span className="content_text_bd">6 home visit interviews</span><span className="content_text"> across the States, 3 in Oregon and 3 in North Carolina in a week. With interviewing 4 home owners with a solar panel and 2 solar panel installers, we were able to </span><span className="content_text_bd">collect and film their journeys related to solar panels.</span><br /> 
            </div>
            <div className="container_keycomponent">
                <img className="joul_img2" src={"./images/qcells/usmap.jpg"} />
            </div>
            <div className="discover_interview">
                    <span className="question_title_seam">video filming and digital content creation</span> <br /> <br /> <br />
                    <span className="content_text">While conducting a semi-structured interview, I was responsible for </span><span className="content_text_bd">conducting the interview and visualizing different scenes in the video</span><span className="content_text"> that will be uploaded the website. Together with the <a href="https://imagebakery.tv/">video production team Image Bakery,</a> we decided on different parts that we would film depending on the interview content.</span><br /> 
                </div>
            <div className="container_keycomponent">
                <img className="joul_img2" src={"./images/qcells/photo_collage.jpg"} />
            </div>            
        </div>
        <div className="container">
            <div className="container_semititle">
                <span className="emphasize_qcells">final design</span> 
            </div>
            <div className="discover_interview">
                <span className="content_text">Hanwha Q-CELLS published </span><span className="content_text_bd">each story of their customer's journey with solar panels</span><span className="content_text"> on their official global website. Each interview we conducted were translated into </span><span className="content_text_bd">rich content that illustrates how Q-CELLS is changing people's daily lives</span><span className="content_text"> through solar energy.</span> <br /><br /><br /><br />
            </div>
        </div>
        <img className="joul_img" src={"./images/qcells/qcells_final.jpg"} />
        <div className="footer"></div>
        </>
    );
}

export default Qcells;