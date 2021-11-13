import Square from "./components/Square";
import React, { useState } from "react";

let playerBoxes = { playerX: [], playerO: [] };
const winningCombos = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

export default function App() {
  const [gameState, setGameState] = useState(true);
  const [player, setPlayer] = useState("X");

  function changePlayer() {
    player === "X" ? setPlayer("O") : setPlayer("X");
  }

  function checkGameOver() {
    for (let i = 0; i < winningCombos.length; i++) {
      console.log(
        playerBoxes[`player${player}`].includes(winningCombos[i][0]),
        playerBoxes[`player${player}`].includes(winningCombos[i][2]),
        playerBoxes[`player${player}`].includes(winningCombos[i][1])
      );
      if (
        playerBoxes[`player${player}`].includes(winningCombos[i][0]) &&
        playerBoxes[`player${player}`].includes(winningCombos[i][2]) &&
        playerBoxes[`player${player}`].includes(winningCombos[i][1])
      ) {
        return true;
      }
    }
  }

  function onClickHandler(e) {
    player === "X"
      ? playerBoxes.playerX.push(parseInt(e.target.id))
      : playerBoxes.playerO.push(parseInt(e.target.id));
    checkGameOver() ? setGameState(false) : changePlayer();
  }

  function buttonOnClickHandler(e) {
    window.location.reload();
  }

  return gameState ? (
    <div className="container">
      <div className="line">
        <Square onClick={onClickHandler} player={player} id="1"></Square>
        <Square onClick={onClickHandler} player={player} id="2"></Square>
        <Square onClick={onClickHandler} player={player} id="3"></Square>
      </div>
      <div className="line">
        <Square onClick={onClickHandler} player={player} id="4"></Square>
        <Square onClick={onClickHandler} player={player} id="5"></Square>
        <Square onClick={onClickHandler} player={player} id="6"></Square>
      </div>
      <div className="line">
        <Square onClick={onClickHandler} player={player} id="7"></Square>
        <Square onClick={onClickHandler} player={player} id="8"></Square>
        <Square onClick={onClickHandler} player={player} id="9"></Square>
      </div>
    </div>
  ) : (
    <div className="game-over">
      <p>{`Game Over!!! player${player} wins!!!`}</p>
      <button className="game-over-button" onClick={buttonOnClickHandler}>
        restart game
      </button>
    </div>
  );
}
