import { useState } from "react";

export function useGame() {
  const [gameIsRunning, setGameIsRunning] = useState(true);

  function stopGame() {
    setGameIsRunning(false);
  }

  return { gameIsRunning, stopGame };
}
