import React, { Fragment } from 'react';
import { getMessage } from './messages';

const Summary = props => {
  const {
    correctAnswers,
    quizLength,
    handleNextQuiz,
    totalQuizes,
    quizIndex,
    handleRestart,
  } = props;

  const randomMessage = getMessage();

  return (
    <Fragment>
      <div className="summary">
        <div>
          You got <b>{correctAnswers}</b> out of <b>{quizLength}</b> questions
          right.
        </div>
        <div className="random-message">{randomMessage}</div>
      </div>
      {quizIndex + 1 === totalQuizes ? (
        <button className="next-button" onClick={handleRestart}>
          Restart Quizzes
        </button>
      ) : (
        <button className="next-button" onClick={handleNextQuiz}>
          Next Quiz
        </button>
      )}
    </Fragment>
  );
};

export default Summary;
