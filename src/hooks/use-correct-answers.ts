import { useState } from "react";

export function useCorrectAnswers() {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  function increaseCorrectAnswers() {
    setCorrectAnswers(correctAnswers => correctAnswers + 1);
  }

  return {
    correctAnswers,
    increaseCorrectAnswers,
  };
}
