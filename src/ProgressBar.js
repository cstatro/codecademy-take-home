import React from 'react';
import { calculatePercentage } from './helpers';

const ProgressBar = props => {
  const { correctAnswers, currentQuiz, incorrectAnswers } = props;
  const quizLength = currentQuiz.questions.length;

  const incorrectStyle = {
    width: calculatePercentage(incorrectAnswers, quizLength),
  };
  const correctStyle = {
    width: calculatePercentage(correctAnswers, quizLength),
  };
  return (
    <div className="progress-bar">
      <div style={correctStyle} className="correct-progress"></div>
      <div style={incorrectStyle} className="incorrect-progress"></div>
    </div>
  );
};

export default ProgressBar;
