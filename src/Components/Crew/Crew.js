import "./Crew.css";
import Crew1 from "./Crew1.js";

function Crew() {
  return (
    <div className="crewContainer">
      <div className="crewContent">
        <div className="crewContentText">
          <span className="pickCrew">02</span>
          <span className="crewchoice">PICK YOUR CREW</span>

            
        </div>
      </div>
      <div className="crewContentText">
                <Crew1/>
    </div>

    <div className="crewnext"></div>
    </div>
    
  );
}
export default Crew;