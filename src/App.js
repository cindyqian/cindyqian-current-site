import React from 'react';
import NavBar from './components/NavBar.js';
import './App.css';
import Rect from './components/Rect.js';
import Image from './components/Image.js';
import ProfileGraphic from "./photos/CindyFace.png";

function App() {
  // document.body.style="background-image: linear-gradient(to right, #4D446F, #Df825F)";
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
          <Rect width="20" height="36" top="10" right="5" backgroundImage="linear-gradient(to bottom right, #A5678E, #E8B7D4)"/*color="839A9E"*//>
          <Image width="30" height="auto" top="0" right="10" src={ProfileGraphic}/>
          <h1 className="bigHeader" style={{right: "5%" || "0%", top: "60%", color: "#A0B6BA", textAlign: "right"}}>Cindy <br/>Qian</h1>
        </div>
        

        <div className="intro-container">
          <Rect width="25" height="91" left="0" top="0" /*backgroundImage="linear-gradient(to bottom right, #F3A9C3, #FBD489)"*/color="E8B7D4"/>
          <Rect width="25" height="91" left="3" top="5" /*backgroundImage="linear-gradient(to top left, #F3A9C3, #FBD489)"*/color="A5678E"/>
          <div className="intro-text-container">
              <p className="normalText" style={{width: "48%", color: "#ffffff", textAlign: "left"}}>

                  <span className="bolderNormalText">Hello!</span><br/>
                  I am a first year student at the 
                  University of Washington—Seattle and
                  am originally from the San Francisco
                  Bay Area. Although I am still exploring
                  different fields of study, I know that my
                  passions revolve around technology,
                  media, and communications.<br/><br/>
                  
                  In the future, I hope to find a way to
                  combine my interests to bring people
                  and society together through my work.<br/>
                  I currently plan to major in either CS
                  or Informatics.
                  
              </p>
  
          </div>



        </div>



      </div>



    </div>
  );
}

export default App;
