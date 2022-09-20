import "./styles.css";

interface QuestionProps {
  flagUrl?: string;
  statement: string;
  correctOption: string;
  options: string[];
  selectedOption: string;
  selectOption: (option: string, correctOption: string) => () => void;
}

export default function Question({
  statement,
  options,
  correctOption,
  flagUrl,
  selectedOption,
  selectOption,
}: QuestionProps) {
  return (
    <>
      <h2 className="question__statement">
        {flagUrl && <img className="question__flag" src={flagUrl} />}
        {statement}
      </h2>
      <ol className="question__options">
        {options.map(option => {
          const thereIsASelection = !!selectedOption;
          const isCorrectOption = option === correctOption;
          const isIncorrectOption = option !== correctOption;
          const isSelectedOption = option === selectedOption;

          let className = "question__option";
          className += thereIsASelection ? " question__option--blocked" : "";
          className +=
            thereIsASelection && isCorrectOption
              ? " question__option--correct"
              : "";
          className +=
            isSelectedOption && isIncorrectOption
              ? " question__option--incorrect"
              : "";

          return (
            <li
              className={className}
              onClick={selectOption(option, correctOption)}
              key={option}
            >
              <span className="question__option__text">{option}</span>
            </li>
          );
        })}
      </ol>
    </>
  );
}
