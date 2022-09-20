import "./styles.css";

interface ResultsProps {
  correctAnswers: number;
  tryAgain: () => void;
}

export default function Results({ correctAnswers, tryAgain }: ResultsProps) {
  return (
    <div className="results">
      <img className="results__img" src="/undraw_winners_ao2o.svg" />
      <h2 className="results__title">Results</h2>
      <div className="results__info">
        You got{" "}
        <span className="results__correct-answers">{correctAnswers}</span>{" "}
        correct answer
        {correctAnswers !== 1 && "s"}{" "}
      </div>
      <button
        className="results__try-again-button"
        type="button"
        onClick={tryAgain}
      >
        Try Again
      </button>
    </div>
  );
}
