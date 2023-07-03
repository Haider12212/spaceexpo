import React, { useState } from "react";
import "./Main.css";
import Home from "./Home.js";
import Destination from "./Destination.js";



function Main() {
  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const getBackgroundImage = () => {
    switch (activeItem) {
      case 0:
        return `url(../assets/home/background-home-desktop.jpg)`;
      case 1:
        return `url(../assets/destination/background-destination-desktop.jpg)`;
      // Add more cases for other items if needed
      default:
        return `url(../assets/home/background-home-desktop.jpg)`;
    }
  };
  

  return (
    <div
      className="mainContainer"
      style={{ backgroundImage: getBackgroundImage() }}
    >
      <nav className="mainNavBar">
        <div className="mainNavLogo">
          <img src="./assets/shared/logo.svg" alt="logo" />
        </div>
        <div className="rectangle"></div>
        <ul className="mainNavList">
          <li
            className={`mainNavListItem ${activeItem === 0 ? "clicked" : ""}`}
            onClick={() => handleItemClick(0)}
          >
            <span id="num">00</span> HOME
          </li>
          <li
            className={`mainNavListItem ${activeItem === 1 ? "clicked" : ""}`}
            onClick={() => handleItemClick(1)}
          >
            <span id="num">01</span> DESTINATION
          </li>
          <li
            className={`mainNavListItem ${activeItem === 2 ? "clicked" : ""}`}
            onClick={() => handleItemClick(2)}
          >
            <span id="num">02</span> CREW
          </li>
          <li
            className={`mainNavListItem ${activeItem === 3 ? "clicked" : ""}`}
            onClick={() => handleItemClick(3)}
          >
            <span id="num">03</span> TECHNOLOGY
          </li>
        </ul>
      </nav>
      {activeItem === 0 && <Home />}
      {activeItem === 1 && <Destination />}
    </div>
  );
}

export default Main;
