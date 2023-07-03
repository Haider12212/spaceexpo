import React from "react";
import "./MoonContent.css";

function MoonContent() {
  return (
    <div className="moonContentContainer">
      <div className="moonContent">
        <div className="moonContentText">
        <div className="moonContentImage">
          <img src="./assets/destination/image-moon.png" alt="moon" />
        </div>
        <div className="moonwrittenDetails">
          <h1>MOON</h1>
          <p>
            See our planet as you’ve never seen it before. A perfect<br></br> relaxing
            trip away to help regain perspective and come<br></br> back refreshed. While
            you’re there, take in some history<br></br> by visiting the Luna 2 and
            Apollo 11 landing sites.
          </p>

          <div className="details">
            <div className="detailsLeft">
              <h4>AVG. DISTANCE</h4>
              <h1>384,400 km</h1>
            </div>
            <div className="detailsRight">
              <h4>EST. TRAVEL TIME</h4>
              <h1>3 DAYS</h1>
            </div>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default MoonContent;
