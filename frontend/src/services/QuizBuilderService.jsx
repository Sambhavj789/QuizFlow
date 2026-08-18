import { useState } from "react";

function useQuiz() {
  const [questions, setQuestions] = useState([
    {
      title: "",
      options: ["", "", "", ""],
      correctOption: 0,
      explanation: "",
    },
  ]);

  function addQuestion() {
    const newQuestion = {
      title: "",
      options: ["", "", "", ""],
      correctOption: 0,
      explanation: "",
    };

    setQuestions([...questions, newQuestion]);
  }

  function handleQuestionChange(index, fieldName, value) {
    const temp = { ...questions[index] };
    temp[fieldName] = value;
    const tempQuestions = [...questions];
    tempQuestions[index] = temp;
    setQuestions(tempQuestions);
  }

  return { questions, addQuestion, handleQuestionChange };
}

export default useQuiz;
