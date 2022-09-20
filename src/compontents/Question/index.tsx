import "./styles.css";

interface QuestionProps {
  statement: string;
  options: string[];
}

export default function Question({ statement, options }: QuestionProps) {
  return (
    <>
      <h2 className="question__statement">{statement}</h2>
      <ol className="question__options">
        {options.map(option => (
          <li className="question__option" key={option}>
            <span className="question__option__text">{option}</span>
          </li>
        ))}
      </ol>
    </>
  );
}
