import React, { useState } from "react";
import '../css/Model.css'; // Import your CSS file

function Statehook() {
  let [indscore, setIndScore] = useState(0);
  let [indballs, setIndBalls] = useState(0);
  let [indsingles, setIndSingles] = useState(0);
  let [inddoubles, setIndDoubles] = useState(0);
  let [indfours, setIndFours] = useState(0);
  let [indsixers, setIndSixers] = useState(0);
  let [indwickets, setIndWickets] = useState(0);
  let [indnoballs, setIndNoballs] = useState(0);
  let [inddotball, setIndDotball] = useState(0);

  let [ausscore, setAusScore] = useState(0);
  let [ausballs, setAusBalls] = useState(0);
  let [aussingles, setAusSingles] = useState(0);
  let [ausdoubles, setAusDoubles] = useState(0);
  let [ausfours, setAusFours] = useState(0);
  let [aussixers, setAusSixers] = useState(0);
  let [auswickets, setAusWickets] = useState(0);
  let [ausnoballs, setAusNoballs] = useState(0);
  let [ausdotball, setAusDotball] = useState(0);

  const wicketmethod = () => {
    if (indwickets == 10) {
      popupmethod()
    }
    else if (indwickets == 10){
    
        setIndScore(indscore + 1);
        setIndBalls(indballs + 1);
        setIndSingles(indsingles + 1);
      }
      else if(indwickets == 10){
        setIndScore(indscore + 2);
        setIndBalls(indballs + 1);
        setIndDoubles(inddoubles + 1);
      }

      else if(indwickets == 10){
        setIndScore(indscore + 4);
        setIndFours(indfours + 1);
        setIndBalls(indballs + 1);
      }

      else if(indwickets == 10){
        setIndScore(indscore + 6);
        setIndSixers(indsixers + 1);
        setIndBalls(indballs + 1);
      }

      else if(indwickets == 10){
        setIndScore(indscore + 1)
        setIndNoballs(indnoballs + 1)
      }

      else if(indwickets == 10){
        setIndBalls(indballs + 1)
        setIndDotball(inddotball + 1)
      }

      
    
    else {
      setIndBalls(indballs + 1)
      setIndWickets(indwickets + 1)
    }
  }


  let popupmethod = () => {
  var modal = document.getElementById("myModal");
    modal.style.display = "block";
  }
  const close = () => {
   var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }

  return (
    <div >
      <h1 className="heading">India Vs Australia T20 Match</h1>
      <div className="team1">
        <h1 className="title">India Score Board

          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"></img>
        </h1>
        <hr></hr>
        <h1>Score: {indscore}/{indwickets}</h1>
        <h1>Singles:{indsingles}</h1>
        <h1>Doubles:{inddoubles}</h1>
        <h1>Overs: {parseInt(indballs / 6)}. {indballs % 6}</h1>
        <h1>Fours: {indfours}</h1>
        <h1>Sixers: {indsixers}</h1>
        <h1>No Balls:{indnoballs}</h1>
        <h1>Wickets:{indwickets}</h1>

        <button
          type="button"
         onClick={(e) => wicketmethod(e)}
        >1</button>

        <button
          type="button"
          onClick={(e) => wicketmethod(e)}
        >2</button>

        <button
          type="button"
          onClick={(e) => wicketmethod(e)}>4</button>

        <button
          type="button" Ind
          onClick={(e) => wicketmethod(e)}
        >6</button>


        <button
          type="button"
          onClick={(e) => wicketmethod(e)}
        > N</button>

        <button
          type="button"
          onClick={(e) => wicketmethod(e)}
        >.</button>

        <button
          type="button"
          onClick={(e) => wicketmethod(e)}
        > W</button>
      </div>

      <div className="team2">
        <h1 className="title" >Australia Score Board
          <img src="data:image/png;base64,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"></img>
        </h1>
        <hr></hr>
        <h1>Score: {ausscore}/{auswickets}</h1>
        <h1>Singles:{aussingles}</h1>
        <h1>Doubles:{ausdoubles}</h1>
        <h1>Overs: {parseInt(ausballs / 6)}. {ausballs % 6}</h1>
        <h1>Fours: {ausfours}</h1>
        <h1>Sixers: {aussixers}</h1>
        <h1>No Balls:{ausnoballs}</h1>
        <h1>Wickets:{auswickets}</h1>

        <button
          type="button"

          onClick={() => {
            if (auswickets >= 10) {
              setAusWickets(auswickets + 0);
              alert(` All out..`);
            } else {
              setAusScore(ausscore + 1);
            setAusBalls(ausballs + 1);
            setAusSingles(aussingles + 1);
            }
           
          }}
        >1</button>

        <button
          type="button"
          onClick={() => {
            if (auswickets >= 10) {
              setAusWickets(auswickets + 0);
              alert(` All out..`);
            } else {
              setAusScore(ausscore + 2);
              setAusBalls(ausballs + 1);
              setAusDoubles(ausdoubles + 1);
            }
            
          }}
        >2</button>



        <button
          type="button"
          onClick={() => {
            setAusScore(ausscore + 4);
            setAusFours(ausfours + 1);
            setAusBalls(ausballs + 1);
          }}>4</button>

        <button
          type="button"
          onClick={() => {
            if (auswickets >= 10) {
              setAusWickets(auswickets + 0);
              alert(` All out..`);
            } else {
              setAusScore(ausscore + 6);
            setAusSixers(aussixers + 1);
            setAusBalls(ausballs + 1);
            }
            
          }}
        >6</button>


        <button
          type="button"
          onClick={() => {
            if (auswickets >= 10) {
              setAusWickets(auswickets + 0);
              alert(` All out..`);
            } else {
              setAusScore(ausscore + 1)
            setAusNoballs(ausnoballs + 1)
            }
           
          }}
        > N</button>


        <button
          type="button"
          onClick={() => {
            if (auswickets >= 10) {
              setAusWickets(auswickets + 0);
              alert(` All out..`);
            } else {
              setAusBalls(ausballs + 1)
            setAusDotball(ausdotball + 1)
            }
            
          }}
        >.</button>


        <button
          type="button"
          onClick={() => {
            if (auswickets >= 10) {
              setAusWickets(auswickets + 0);
              alert(` All out..`);
            } else {
              setAusWickets(auswickets + 1);
              setAusBalls(ausballs + 1);
            }
          }}
        > W</button>
      </div>

     <div>
       

        <div id="myModal" class="modal">

          <div className="modal-content">
            <span onClick={close} className="close">&times;</span>
            <p>Game over..</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Statehook;







