import { useState } from "react";

export function useCorrectAnswers() {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  function increaseCorrectAnswers() {
    setCorrectAnswers(correctAnswers => correctAnswers + 1);
  }

  function clearCorrectAnswers() {
    setCorrectAnswers(0);
  }

  return {
    correctAnswers,
    increaseCorrectAnswers,
    clearCorrectAnswers,
  };
}
