import { useState } from "react";

export function useSelectedOption() {
  const [correctIsSelected, setCorrectIsSelected] = useState(false);
  const [incorrectIsSelected, setIncorrectIsSelected] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  function getSelectOptionFunction(increaseCorrectAnswers: () => void) {
    function selectOption(option: string, correctOption: string) {
      return () => {
        if (selectedOption) return;

        setSelectedOption(option);

        if (option === correctOption) {
          setCorrectIsSelected(true);
          increaseCorrectAnswers();
        } else {
          setIncorrectIsSelected(true);
        }
      };
    }

    return selectOption;
  }

  function clearSelectedOption() {
    setIncorrectIsSelected(false);
    setCorrectIsSelected(false);
    setSelectedOption("");
  }

  return {
    correctIsSelected,
    incorrectIsSelected,
    selectedOption,
    getSelectOptionFunction,
    clearSelectedOption,
  };
}
