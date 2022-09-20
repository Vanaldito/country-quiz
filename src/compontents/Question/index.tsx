import "./styles.css";

interface QuestionProps {
  flagUrl?: string;
  statement: string;
  options: string[];
}

export default function Question({
  statement,
  options,
  flagUrl,
}: QuestionProps) {
  return (
    <>
      <h2 className="question__statement">
        {flagUrl && <img className="question__flag" src={flagUrl} />}
        {statement}
      </h2>
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
