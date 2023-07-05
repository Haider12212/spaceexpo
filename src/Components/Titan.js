import "./Titan.css"

function Titan() {
    return(
        <div className="titanContainer">
            <div className="titanContent">
                <div className="titanContentText">
                    <div className="titanImage">
                        <img src="./assets/destination/image-titan.png" alt="titan" />
                    </div>
                    <div className="titanWrittenDetails">
                        <h1>TITAN</h1>
                        <p>
                        The only moon known to have a dense atmosphere other <br></br>than Earth, Titan 
  is a home away from home (just a few<br></br>hundred degrees colder!). As a 
  bonus, you get striking<br></br>views of the Rings of Saturn.
                        </p>
                        <div className="titanDetails">
                            <div className="titanDetailsLeft">
                                <h4>AVG. DISTANCE</h4>
                                <h1>1.6 BIL. KM</h1>
                            </div>
                            <div className="titanDetailsRight">
                                <h4>EST. TRAVEL TIME</h4>
                                <h1>7 YEARS</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Titan;