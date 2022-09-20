import { useState } from "react";

export function useGame() {
  const [gameIsRunning, setGameIsRunning] = useState(true);

  function stopGame() {
    setGameIsRunning(false);
  }

  function startGame() {
    setGameIsRunning(true);
  }

  return { gameIsRunning, stopGame, startGame };
}
