import { useQuestion } from "../../hooks/use-question";
import Loader from "../Loader";
import Question from "../Question";

import "./styles.css";

export default function Quiz() {
  const [questionInfo, updateQuestion] = useQuestion();

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
          <Question
            statement={questionInfo.statement}
            correctOption={questionInfo.correctOption}
            options={questionInfo.options}
            flagUrl={questionInfo.flagUrl}
          />
        )}
      </div>
    </div>
  );
}
