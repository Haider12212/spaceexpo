import React, { useState } from "react";
import "./Destination.css";
import MoonContent from "./MoonContent.js";
import Mars from "./Mars.js";
import Europa from "./Europa";
import Titan from "./Titan.js";

function Destination() {
  const [selectedDestination, setSelectedDestination] = useState(null);

  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination);
  };

  const renderDestinationContent = () => {
    switch (selectedDestination) {
      case "MOON":
        return <MoonContent />;
      case "MARS":
        return <Mars/>;
      case "EUROPA":
        return <Europa/>;
      case "TITAN":
        return <Titan/>;
      default:
        return <div className="destinationContent">Select a destination</div>;
    }
  };

  return (
    <div className="destinationContainer">
      <div className="destinationContent">
        <span className="pickDestination">01</span>
        <span className="destinationchoice">PICK YOUR DESTINATION</span>
        <div className="destinationContentText">
          <ul className="destinationList">
            <li
              className={`destinationListItem ${
                selectedDestination === "MOON" ? "selected" : ""
              }`}
              onClick={() => handleDestinationClick("MOON")}
            >
              MOON
            </li>
            <li
              className={`destinationListItem ${
                selectedDestination === "MARS" ? "selected" : ""
              }`}
              onClick={() => handleDestinationClick("MARS")}
            >
              MARS
            </li>
            <li
              className={`destinationListItem ${
                selectedDestination === "EUROPA" ? "selected" : ""
              }`}
              onClick={() => handleDestinationClick("EUROPA")}
            >
              EUROPA
            </li>
            <li
              className={`destinationListItem ${
                selectedDestination === "TITAN" ? "selected" : ""
              }`}
              onClick={() => handleDestinationClick("TITAN")}
            >
              TITAN
            </li>
          </ul>
          {renderDestinationContent()}
        </div>
      </div>
    </div>
  );
}

export default Destination;
