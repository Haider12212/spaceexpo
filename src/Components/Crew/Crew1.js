import "./Crew1.css";

function Crew1() {
  return (
    <div className="crew1Container">
      <div className="crew1Content">
        <div className="crew1ContentText">
          <h1>COMMANDER</h1>
          <h3>DOUGLAS HURLEY</h3>
          <p>
            Douglas Gerald Hurley is an American engineer, former<br></br>{" "}
            Marine Corps pilot and former NASA astronaut. He<br></br> launched
            into space for the third time as commander of <br></br>Crew Dragon
            Demo-2.
          </p>
        </div>
        <div className="crew1ContentImage">
          <img
            src="./assets/crew/image-douglas-hurley.png"
            alt="douglas-hurley"
          ></img>
        </div>
      </div>
    </div>
  );
}
export default Crew1;