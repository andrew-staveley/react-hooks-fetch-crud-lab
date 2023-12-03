import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((r) => r.json())
    .then((questions) => setQuestions(questions))
  }, [questions])

  function handleOnChange(updatedAnswer) {
    const updatedAnswers = questions.map((question) => {
      if (question.id === updatedAnswer.id) {
        return updatedAnswer;
      } else {
        return question;
      }
    });
    setQuestions(updatedAnswers);
    console.log(updatedAnswers);
  }

  function handleAddNewQuestion(newQuestion) {
    setQuestions([...questions, newQuestion]);
  }

  function handleDeleteQuestion(deletedQuestion) {
    const updatedQuestionList = questions.filter(
      (question) => question.id !== deletedQuestion.id
    );
    setQuestions(updatedQuestionList);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm handleAddNewQuestion={handleAddNewQuestion}/> : <QuestionList questions={questions} handleOnChange={handleOnChange} handleDeleteQuestion={handleDeleteQuestion}/>}
    </main>
  );
}

export default App;
