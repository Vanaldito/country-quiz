import { useState } from "react";
import { useQuestion } from "../../hooks/use-question";
import Loader from "../Loader";
import Question from "../Question";
import Results from "../Results";

import "./styles.css";

export default function Quiz() {
  const [questionInfo, updateQuestion] = useQuestion();
  const [correctIsSelected, setCorrectIsSelected] = useState(false);
  const [incorrectIsSelected, setIncorrectIsSelected] = useState(false);
  const [correctAnwers, setCorrectAnswers] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const loading = questionInfo === null;

  function selectOption(option: string, correctOption: string) {
    return () => {
      if (selectedOption) return;

      setSelectedOption(option);

      if (option === correctOption) {
        setCorrectIsSelected(true);
        setCorrectAnswers(correctAnwers => correctAnwers + 1);
      } else {
        setIncorrectIsSelected(true);
      }
    };
  }

  function getNextQuestion() {
    updateQuestion();
    setCorrectIsSelected(false);
    setSelectedOption("");
  }

  function endGame() {
    setGameOver(true);
    setCorrectIsSelected(false);
    setIncorrectIsSelected(false);
    setSelectedOption("");
  }

  return (
    <div className="quiz">
      <header className="quiz__header">
        <h1 className="quiz__title">Country Quiz</h1>
        <img className="quiz__img" src="/undraw_adventure_4hum 1.svg" />
      </header>
      <div className="quiz__content">
        {loading ? (
          <Loader />
        ) : (
          <>
            {gameOver ? (
              <Results correctAnswers={correctAnwers} />
            ) : (
              <Question
                statement={questionInfo.statement}
                correctOption={questionInfo.correctOption}
                options={questionInfo.options}
                flagUrl={questionInfo.flagUrl}
                selectedOption={selectedOption}
                selectOption={selectOption}
              />
            )}
            {correctIsSelected && (
              <button
                className="quiz__next-question-button"
                onClick={getNextQuestion}
              >
                Next
              </button>
            )}
            {incorrectIsSelected && (
              <button className="quiz__end-game-button" onClick={endGame}>
                Next
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
