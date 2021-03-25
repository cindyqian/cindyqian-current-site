import React from 'react';
import NavBar from './components/NavBar.js';
import './App.css';
import Rect from './components/Rect.js';
import Image from './components/Image.js';
import ProfileGraphic from "./photos/CindyFace.png";

function App() {
  return (
    <div className="All">
      <div /*className="NavBarDiv"*/>
        <NavBar /*name="About Me"*//>
        {/* <NavBar name="Portfolio"/>
        <NavBar name="Resume"/>
        <NavBar name="Contact"/> */}
      </div>

      <div className="About" >
        <div className="profile-container">
          <Rect type = "sharp" width="100" height="100" top="0" left="0" color="#E0AB98"/>
          <Image width="40" height="auto" top="10" right="10" src={ProfileGraphic}/>
          {/* <h1 className="bigHeader" style={{left: "90%" || "0%", top: "0%", color: "#A0B6BA"}}>Cindy Qian</h1> */}
        </div>
        

        <div className="intro-container">
          {/* <Rect width="25" height="91" left="0" top="0" color="#EB9187"/>
          <Rect width="25" height="91" left="3" top="5" color="#CB8D9A"/> */}
          
          <div className="intro-text-container">
          <div className="typewriter"><span className="bolderNormalTextWhite">Hello, my name is </span><span className="bolderNormalTextBlack">Cindy Qian</span><span className="bolderNormalTextWhite">.</span></div>

              <p className="normalText" style={{width: "60%", color: "#ffffff", textAlign: "left"}}>
                  {/* <br/><br/> */}
                  I'm a first year student at the 
                  University of Washington—Seattle and
                  am originally from the San Francisco
                  Bay Area. Although I am still exploring
                  different fields of study, I know that my
                  passions revolve around technology,
                  media, communications, and human good.<br/><br/>
                  
                  I hope to find a way to
                  combine my interests to bring people
                  and society together through my work.
                  I currently plan to major in either CS
                  or Informatics.
                  
              </p>
  
          </div >



        </div>


        <div className= "portfolio-container">






        </div>





      </div>



    </div>
  );
}

export default App;
