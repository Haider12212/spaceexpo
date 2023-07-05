import React, { useState } from "react";
import "./Crew.css";
import Crew1 from "./Crew1.js";
import Crew2 from "./Crew2.js"; // Add additional crew components as needed

function Crew() {
  const [currentCrew, setCurrentCrew] = useState(1);

  const handleNextCrew = () => {
    setCurrentCrew((prevCrew) => (prevCrew === 1 ? 2 : 1)); // Add additional crew members as needed
  };

  return (
    <div className="crewContainer">
      <div className="crewContent">
        <div className="crewContentText">
          <span className="pickCrew">02</span>
          <span className="crewchoice">PICK YOUR CREW</span>
        </div>
        <div className="crewContentText">
          {currentCrew === 1 && <Crew1 />}
          {currentCrew === 2 && <Crew2 />} {/* Add additional crew components as needed */}
        </div>
      </div>
      <div className="crewnext" onClick={handleNextCrew}></div>
    </div>
  );
}

export default Crew;
