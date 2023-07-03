import "./Mars.css"
import React from "react";

function Mars() {
    return(
        <div className="marsContentContainer">
      <div className="marsContent">
        <div className="marsContentText">
        <div className="marsContentImage">
          <img src="./assets/destination/image-mars.png" alt="moon" />
        </div>
        <div className="marswrittenDetails">
          <h1>MARS</h1>
          <p>
          Don’t forget to pack your hiking boots. You’ll need them to <br></br>tackle Olympus Mons, 
  the tallest planetary mountain in <br></br>our solar system. It’s two and a half times 
  the size of <br></br>Everest!
          </p>

          <div className="mars-details">
            <div className="m-detailsLeft">
              <h4>AVG. DISTANCE</h4>
              <h1>225 MIL.  KM</h1>
            </div>
            <div className="m-detailsRight">
              <h4>EST. TRAVEL TIME</h4>
              <h1>9 MONTHS</h1>
            </div>
          </div>
        </div>
        </div>
        
      </div>
    </div>
    );
}
export default Mars;