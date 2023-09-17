import React from "react";
import "./Board.css";
export default function Board(props) {
  return (
    <div className="leaderBoard">
      <h2 style={{ color: "white" }}>LeaderBoard</h2>
      <div className="boardShowing">
        <table className="board">
          <tbody>
            <tr>
              <td className="board">
                {props.guestShow.map((val) => {
                  return (
                    <span key={val.name}>
                      Name: {val.name} Win: {val.win} Lose: {val.lose}
                    </span>
                  );
                })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
