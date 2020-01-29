import React, { Component, Fragment } from 'react';
import { quizzes } from './quizzes';
import QuizCard from './QuizCard';

class MultipleChoiceQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizIndex: 0,
      questionIndex: 0,
      correctAnswers: 0,
    };
  }
  render() {
    const { quizIndex, questionIndex } = this.state;
    const currentQuiz = quizzes[quizIndex];
    const currentQuestion = currentQuiz.questions[questionIndex];
    return (
      <Fragment>
        <div>{currentQuiz.title}</div>
        <div>{currentQuiz.title}</div>
        <QuizCard {...currentQuestion} />
      </Fragment>
    );
  }
}

export default MultipleChoiceQuiz;
