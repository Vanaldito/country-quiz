import { useState } from "react";
import { useQuestion } from "../../hooks/use-question";
import Loader from "../Loader";
import Question from "../Question";

import "./styles.css";

export default function Quiz() {
  const [questionInfo, updateQuestion] = useQuestion();
  const [correctIsSelected, setCorrectIsSelected] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const loading = questionInfo === null;

  function selectOption(option: string, correctOption: string) {
    return () => {
      if (selectedOption) return;

      setSelectedOption(option);

      if (option === correctOption) {
        setCorrectIsSelected(true);
      }
    };
  }

  function getNextQuestion() {
    updateQuestion();
    setCorrectIsSelected(false);
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
            <Question
              statement={questionInfo.statement}
              correctOption={questionInfo.correctOption}
              options={questionInfo.options}
              flagUrl={questionInfo.flagUrl}
              selectedOption={selectedOption}
              selectOption={selectOption}
            />
            {correctIsSelected && (
              <button
                className="quiz__next-question-button"
                onClick={getNextQuestion}
              >
                Next
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
