import { useState } from "react";

function useQuiz() {
  const [questions, setQuestions] = useState([
    {
      title: "",
      options: ["", "", "", ""],
      correctOption: 1,
      explanation: "",
    },
  ]);

  const [quizSettings, setQuizSetting] = useState({
    quizTitle: "",
    batch: "",
    correctMarks: 0,
    incorrectMarks: 0,
  });

  function handleQuizSettingsChange(field, value) {
    setQuizSetting({ ...quizSettings, [field]: value });
  }

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

  function handleQuizOptionChange(questionIndex, optionIndex, value) {
    const tempQuestion = { ...questions[questionIndex] };
    tempQuestion.options[optionIndex] = value;
    const temp = [...questions];
    temp[questionIndex] = tempQuestion;
    setQuestions(temp);
  }

  function handleMarkCorrectOption(questionIndex, optionIndex) {
    const tempQuestion = { ...questions[questionIndex] };
    tempQuestion.correctOption = optionIndex;
    const temp = [...questions];
    temp[questionIndex] = tempQuestion;
    setQuestions(temp);
  }

  return {
    questions,
    addQuestion,
    handleQuestionChange,
    handleQuizOptionChange,
    handleMarkCorrectOption,
    quizSettings,
    handleQuizSettingsChange,
  };
}

export default useQuiz;
