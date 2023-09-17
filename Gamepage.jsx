import React, { useState } from "react";
import Card from "../Card/Card";
import "./Gamepage.css";
//defining a score and rounds variables.
import Button from "../UI/Button";
let guestScore = 0;
let computerScore = 0;
let roundList = 1;
export default function Gamepage(props) {
  const [cardIndex, setCardIndex] = useState(0);

  //a function that choosing the next card by random.
  //if the player gets a high card then he gets a point in, else the computer gets the point score.
  const chooseNextCard = () => {
    if (props.computer.cardArr[cardIndex] > props.guest.cardArr[cardIndex]) {
      computerScore++;
      roundList++;
    } else if (
      props.computer.cardArr[cardIndex] < props.guest.cardArr[cardIndex]
    ) {
      guestScore++;
      roundList++;
    }
    if (cardIndex === 25) {
      props.guest.games++;

      if (computerScore > guestScore) {
        props.guest.lose++;
        props.guest.lastGame = false;
      } else if (computerScore < guestScore) {
        props.guest.win++;
        //if the player wons then this is a last game. turns to true.
        props.guest.lastGame = true;
      } else if (computerScore === guestScore) {
        return (
          <h2 style={{ color: "blue" }}>
            {computerScore === guestScore} <br />
            Tie
          </h2>
        );
      }

      roundList = 1;
      guestScore = 0;
      computerScore = 0;
      props.nextPage(2);
    } else {
      setCardIndex(cardIndex + 1);
    }
  };

  return (
    <div className="gamepage-container">
      {/* shows the score of guest and computer  */}
      <h2>{props.computer.name}</h2>
      <p className="showPageScore">Score: {computerScore}</p>

      <Card cardValue={props.computer.cardArr[cardIndex]} />
      <Card cardValue={props.guest.cardArr[cardIndex]} />

      <h2>{props.guest.name}</h2>
      <p className={"showPageScore"}>Score:{guestScore}</p>

      <h3>Round: {roundList}</h3>
      <div className="card-container">
        {/* A button that opens a next card */}
        <Button className="nextCardButton" onClick={chooseNextCard}></Button>
      </div>
    </div>
  );
}
