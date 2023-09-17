import React from "react";
import Button from "../UI/Button";
import "./Scorepage.css";
export default function Scorepage(props) {
  const showScore = () => {
    return (
      <h2 className="username-header">
        {" "}
        Guest: {props.guest.name}: {props.guest.win} <br /> - <br /> Computer :{" "}
        {props.guest.lose}
      </h2>
    );
  };

  //a function that shows the score if the guest is winner or loser
  const showingWinOrLose = () => {
    if (props.guest.lastGame === true) {
      return (
        <h2
          style={{
            color: "green",
            border: "1px solid green",
            textAlign: "center",
          }}
        >
          You Win
        </h2>
      );
    } else {
      return (
        <h2
          style={{ color: "red", border: "1px solid red", textAlign: "center" }}
        >
          {" "}
          You Lose
        </h2>
      );
    }
  };

  const pageReset = () => {
    props.pageRestart(1);
    //calling the shufflecards function from App.js
    props.shuffleCards(props.guest.name);
  };

  const backButton = () => {
    props.pageRestart(0);
  };

  return (
    <div>
      <Button className="backBtn" onClick={backButton}>
        Back to Menu
      </Button>
      {showingWinOrLose()}
      {showScore()}
      <div>
        <Button className="play-again" onClick={pageReset}>
          Play Again
        </Button>
      </div>
    </div>
  );
}
