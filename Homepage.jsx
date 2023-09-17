import React, { useState } from "react";
import Board from "../Board/Board";
import Button from "../UI/Button";
import "./Homepage.css";
export default function Homepage(props) {
  const [leaderBoard, setLeaderBoard] = useState(false);
  const [name, setName] = useState("");
  const [errorPage, setErrorPage] = useState("");

  //a function that shows the leader in board
  const showingBoard = () => {
    if (leaderBoard === false) {
      setLeaderBoard(true);
    } else {
      setLeaderBoard(false);
    }
  };

  //a function that checks if the name is valid and more then 1 char length.
  const isValidName = () => {
    //if there is no name it wont continue to the game and adds an error message
    //else it moves to the game.
    if (name.length > 0) {
      return props.nextCards(name);
    } else {
      // localStorage.setItem('username', name);
      setErrorPage("Please enter a valid Name!");
    }
  };
  //handling the name values
  const nameHandlerOnChange = (e) => {
    setName(e.target.value);
    // localStorage.setItem('username', name);
  };
  return (
    <div>
      <div className="homepage-container">
        <h1 className="homepage-title">Combat</h1>
        <div className="username-container">
          <h3 className="username-label">Username</h3>
          <input
            className="username-input"
            type="text"
            onChange={nameHandlerOnChange}
            placeholder="Enter Your Name"
          />{" "}
          <br />
        </div>
        {errorPage && <p style={{ color: "red" }}>{errorPage}</p>}
        <Button className="save-button" onClick={isValidName}>
          Play
        </Button>{" "}
        <br />
        <br />
        <Button className="leaderBoard" onClick={showingBoard}>
          Show Board
        </Button>
        {leaderBoard ? <Board guestShow={props.guestShow} /> : ""}
      </div>
    </div>
  );
}
