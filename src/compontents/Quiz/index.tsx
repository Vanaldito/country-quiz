import { useCorrectAnswers } from "../../hooks/use-correct-answers";
import { useGame } from "../../hooks/use-game";
import { useQuestion } from "../../hooks/use-question";
import { useSelectedOption } from "../../hooks/use-selected-option";
import Loader from "../Loader";
import Question from "../Question";
import Results from "../Results";

import "./styles.css";

export default function Quiz() {
  const {
    selectedOption,
    correctIsSelected,
    incorrectIsSelected,
    getSelectOptionFunction,
    clearSelectedOption,
  } = useSelectedOption();
  const { correctAnswers, increaseCorrectAnswers, clearCorrectAnswers } =
    useCorrectAnswers();
  const { gameIsRunning, stopGame, startGame } = useGame();
  const [questionInfo, updateQuestion] = useQuestion();

  function getNextQuestion() {
    updateQuestion();
    clearSelectedOption();
  }

  function endGame() {
    stopGame();
    clearSelectedOption();
  }

  function tryAgain() {
    clearCorrectAnswers();
    clearSelectedOption();
    updateQuestion();
    startGame();
  }

  const loading = questionInfo === null;

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
            {gameIsRunning ? (
              <Question
                statement={questionInfo.statement}
                correctOption={questionInfo.correctOption}
                options={questionInfo.options}
                flagUrl={questionInfo.flagUrl}
                selectedOption={selectedOption}
                selectOption={getSelectOptionFunction(increaseCorrectAnswers)}
              />
            ) : (
              <Results correctAnswers={correctAnswers} tryAgain={tryAgain} />
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
