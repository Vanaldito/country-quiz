import { CountryData, QuestionInfo } from "../types";

export function generateNewQuestion(countriesData: Array<CountryData>) {
  const questionType = (["capital", "flag"] as ["capital", "flag"])[
    Math.floor(Math.random() * 2)
  ];
  const questionInfo: QuestionInfo = {
    type: "capital",
    statement: "",
    correctOption: "",
    options: [],
  };

  const randomizedData = [...countriesData].sort(() => Math.random() - 0.5);

  questionInfo.correctOption = randomizedData[0].name;
  questionInfo.options = [0, 1, 2, 3].map(index => randomizedData[index].name);

  switch (questionType) {
    case "capital":
      questionInfo.type = "capital";
      questionInfo.statement = `${randomizedData[0].capital} is the capital of`;
      break;

    case "flag":
      questionInfo.type = "flag";
      questionInfo.flagUrl = randomizedData[0].flagUrl;
      questionInfo.statement = "Which country does this flag belong to?";
      break;
  }

  return questionInfo;
}
