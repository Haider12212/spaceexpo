import "./Europa.css"
import React from "react";

function Europa() {
    return(
        <div className="europaContainer">
            <div className="europaContent">
                <div className="europaContentText">
                    <div className="europaImage">
                        <img src="./assets/destination/image-europa.png" alt="Europa" />
                    </div>
                    <div className="europaWrittenDetails">
                        <h1>EUROPA</h1>
                        <p>
                        Travel to the Jovian moon of Europa and experience the<br></br>wonders of
                        interstellar space travel. Europa’s<br></br>subsurface ocean may be the
                        most promising place in<br></br>the solar system to find present-day
                        environments<br></br> suitable for life beyond Earth.
                        </p>
                        <div className="europaDetails">
                            <div className="europaDetailsLeft">
                                <h4>AVG. DISTANCE</h4>
                                <h1>628 MIL.  KM</h1>
                            </div>
                            <div className="europaDetailsRight">
                                <h4>EST. TRAVEL TIME</h4>
                                <h1>3 YEARS</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Europa;