import React from "react";

const QuestionWithAnswes = (props) => {
  // console.log(props);
  const { question, answer } = props.data;
  return (
    <div className="text-left">
      <p className="mt-10 mb-3 font-semibold ">{question}</p>
      <p className="">{answer}</p>
    </div>
  );
};

export default QuestionWithAnswes;
