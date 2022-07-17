import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './HeroContent.css';
import ReactPlayer from 'react-player';
import myVideo from './Work/about_illust.mp4';

function HeroContent({
    
}) { 
    const text = "I love to design with creativity and play with code. \n I like to visualize in graphics, construct with code and prototype with programs. \n How? Just take a look at my website that I created myself.";
    const text_2 = "Born and raised in Seoul, lived in Umea, Helsinki, Paris, Geneva and Amsterdam. \n Now writing my master's thesis about trust in autonomous vehicles at Umea Institute of Design";
    return (
        <>

       <div className="container">
           <div className="content">
                <div className="empty">
                    <div className="intro_img">
                        <div className="container player-wrapper">
                            <ReactPlayer className="react-player video-right" width="130%" height="130%" url={myVideo} controls={false} muted={true} playing={true} loop={true} /> 
                        </div>
                    </div>
                </div>
                 <div className="textcontent">
                    <span className="span_p_sm">Currently finished </span>
                    <a href="https://drive.google.com/file/d/15sId83Mw8XTa12FsdUuRv0LC3FlIbGMY/view?usp=sharing"><span className="span_grey">master's thesis at Umeå Institute of Design</span></a>
                    <span className="span_p_sm"> about autonomy and trust in self-driving vehicles in collaboration with Volvo Cars. Previously, I was working in these places: </span>
                    <a href="https://www.philips.com/global"><span className="span_grey">Philips,</span> </a>
                    <a href="https://www.apgroup.com/int/en/"><span className="span_grey">Amorepacific,</span></a>
                    <a href="https://www.brandazine.com/"><span className="span_grey"> Brandazine, </span> </a>
                    <a href="http://www.frum.co.kr/"><span className="span_grey">Frum</span> </a><span className="span_p_sm"> in the field of </span>
                    <span className="span_bold">UX/UI, visual graphics and design strategy.</span> <br /><br /><br />
                    <a href="https://drive.google.com/file/d/1qkCIlb49lhPNz1q0DCDTboRJdSMdca2_/view?usp=sharing">

                    <span className="span_p">I love to</span><span className="span_bold"> design with creativity </span><span className="span_p">and</span><span className="span_bold"> play with code.</span> <span className="span_p">I like to </span><span className="span_bold">visualize in graphics, construct with code and prototype with programs. </span> 
                    <span className="span_p">Born and raised in Seoul, lived in Umea, Helsinki, Paris, Geneva and Amsterdam. I love </span><span className="span_bold">morning yogas, freshly brewed filter coffee and animals! <br /></span><span className="span_p">I also have a huge obsession in designer chairs and interior design.</span><br />
                    <a href="https://www.youtube.com/watch?v=bYvG-YEQyTs"><span className="span_grey"> Click here to see a sneak peak of it :) </span></a> <br /> <br /> <br />

                    <button class="button">RESUME</button> </a>
                    <Link to="/work" className="nav-link" >
                    <button class="button btn_left">ALL PROJECTS</button>
                    </Link>
                    {/* <br /> <br /> <br /><hr class="grey"/> */}
                 </div>          
             </div>
        </div>

        

        </>
    );
}

export default HeroContent;