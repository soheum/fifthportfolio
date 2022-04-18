import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './HeroContent.css';

function HeroContent({
    
}) { 
    const text = "I love to design with creativity and play with code. \n I like to visualize in graphics, construct with code and prototype with programs. \n How? Just take a look at my website that I created myself.";
    const text_2 = "Born and raised in Seoul, lived in Umea, Helsinki, Paris, Geneva and Amsterdam. \n Now writing my master's thesis about trust in autonomous vehicles at Umea Institute of Design";
    return (
        <>

       <div className="container">
           <div className="content">
                <div className="empty"></div>
                 <div className="textcontent">
                    <span className="span_semititle2">HELLO! MY NAME IS SOHEUM</span> <br />
                    <span className="span_italics">try pronouncing as So.... hmmmmm....</span> <br /> <br />
                    <span className="span_p">I love to</span><span className="span_bold"> design with creativity </span><span className="span_p">and</span><span className="span_bold"> play with code.</span> <br /> <span className="span_p">I like to </span><span className="span_bold">visualize in graphics, construct with code and prototype with programs.</span> <br /> <span className="span_p">How? Just take a look at my website that I created myself.</span> <br /> <br />
                    <span className="span_p">Born and raised in Seoul, lived in Umea, Helsinki, Paris, Geneva and Amsterdam. <br />I love </span><span className="span_bold">morning yogas, freshly brewed filter coffee and animals! <br /></span><span className="span_p">I also have a huge obsession in designer chairs and interior design.</span><br />
                    <a href="https://www.youtube.com/watch?v=bYvG-YEQyTs"><span className="span_grey"> Click here to see a sneak peak of it :) </span></a> <br /> <br />
                    <span className="span_p">Now writing my </span><span className="span_bold">master's thesis about</span><a href="https://drive.google.com/file/d/15sId83Mw8XTa12FsdUuRv0LC3FlIbGMY/view?usp=sharing"><span className="span_grey"> trust in autonomous vehicles </span></a><span className="span_p"> at Umeå Institute of Design</span> <br />
                    <br /><a href="https://drive.google.com/file/d/1qkCIlb49lhPNz1q0DCDTboRJdSMdca2_/view?usp=sharing"><span className="span_grey">Click here for my CV.</span></a> <br />
                    <br /><br /><br /><hr />
                 </div>          
             </div>
        </div>
        
        <div className="container">
            <div className="content">
                <div className="empty"></div>
                <div className="textcontent"> 
                    <span className="span_semititle">I WAS WORKING AT</span> <br /> <br />
                    <div className="span_p2"><img class="img_logo" src={"./images/about/philips.png"} />   as a UX design intern at Amsterdam</div>
                     <div className="span_p2"><img class="img_logo_2" src={"./images/about/amorepacific.png"} />   as a visual design intern at Seoul</div> 
                     <div className="span_p2"><img class="img_logo_2" src={"./images/about/brandazine.png"} />   as a product designer at Seoul</div> 
                     <div className="span_p2"><img class="img_logo" src={"./images/about/frum.png"} />   as a UX consultant intern and freelancer at Seoul</div> <br />
                </div>
            </div>
        </div>
        <br /> 
        <div className="container">
            <div className="content">
                <div className="empty"></div>
                <div className="textcontent"> 
                    <span className="span_semititle">I'M STUDYING AT</span> <br /> <br />
                    <div className="span_p2">Umea Institute of Design in Interaction Design Master's</div>
                     <div className="span_p2">Yonsei University in Information and Interaction Desgn Bachelor's</div> 
                </div>
            </div>
        </div>
        <br />
        <div className="container">
            <div className="content">
                <div className="empty"></div>
                <div className="textcontent"> 
                    <span className="span_semititle">SOME AWARDS I RECEIVED ARE</span> <br /> <br />
                    <img class="img_logo award" src={"./images/about/iF_1.png"} /> 
                    <img class="img_logo award" src={"./images/about/iF_2.png"} /> 
                    <img class="img_logo award" src={"./images/about/IxDA.png"} /> 
                    <img class="img_logo_3 award" src={"./images/about/UX.png"} /> 
                    <img class="img_logo_4" src={"./images/about/Core.png"} /> 
                </div>
            </div>
        </div>
<br /> <br />
        <div className="container">
            <div className="content">
                <div className="empty"></div>
                <div className="textcontent"> 
                    <span className="span_semititle">FEEL FREE TO REACH OUT TO ME FOR ANYTHING AT SOHEUM@NAVER.COM :)</span>
                </div>
            </div>
        </div>


        <div className="footer"></div>

        </>
    );
}

export default HeroContent;