import { useEffect, useState } from "react";
import { generateNewQuestion } from "../helpers/generate-new-question";
import { getCountriesData } from "../services/get-countries-data";

import { CountryData, QuestionInfo } from "../types";

export function useQuestion(): [QuestionInfo | null, () => void] {
  const [countriesData, setCountriesData] = useState<Array<CountryData> | null>(
    null
  );
  const [questionInfo, setQuestionInfo] = useState<QuestionInfo | null>(null);

  useEffect(() => {
    getCountriesData().then(data => {
      setCountriesData(data);
      setQuestionInfo(generateNewQuestion(data));
    });
  }, []);

  function updateQuestion() {
    if (countriesData) setQuestionInfo(generateNewQuestion(countriesData));
  }

  return [questionInfo, updateQuestion];
}
