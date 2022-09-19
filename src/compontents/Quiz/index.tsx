import { useEffect, useState } from "react";
import { getCountriesData } from "../../services/get-countries-data";
import { CountryData } from "../../types";
import Loader from "../Loader";

import "./styles.css";

export default function Quiz() {
  const [countriesData, setCountriesData] = useState<Array<CountryData> | null>(
    null
  );

  useEffect(() => {
    getCountriesData().then(data => setCountriesData(data));
  }, []);

  const loading = countriesData === null;

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
            <h2 className="quiz__question">Kuala Lumpur is the capital of</h2>
            <ol className="quiz__options">
              <li className="quiz__option">
                <span className="quiz__option__text">Vietnam</span>
              </li>
              <li className="quiz__option">
                <span className="quiz__option__text">Malaysia</span>
              </li>
              <li className="quiz__option">
                <span className="quiz__option__text">Sweden</span>
              </li>
              <li className="quiz__option">
                <span className="quiz__option__text">Austria</span>
              </li>
            </ol>
          </>
        )}
      </div>
    </div>
  );
}
