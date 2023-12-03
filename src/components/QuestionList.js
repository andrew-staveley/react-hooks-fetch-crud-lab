import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, handleOnChange, handleDeleteQuestion }) {

  const displayQuestions = questions.map((question) => (
    <QuestionItem
      key={question.id}
      question={question}
      onChange={handleOnChange}
      onDeleteQuestion={handleDeleteQuestion}
      />
  ))

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{displayQuestions}</ul>
    </section>
  );
}

export default QuestionList;
