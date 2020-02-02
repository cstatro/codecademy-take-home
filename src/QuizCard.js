import React, { Component, Fragment } from 'react';
import { shuffle } from './helpers';

class QuizCard extends Component {
  constructor(props) {
    super(props);
    this.state = { answers: [], answered: false, message: '', selected: '' };
  }

  componentDidMount() {
    this.handleCardInitialize();
  }

  componentDidUpdate() {
    const { answered, message } = this.state;
    if (answered === false && message) {
      this.handleCardInitialize();
    }
  }

  handleCardInitialize = () => {
    const { correctAnswer, incorrectAnswers } = this.props;
    const answers = shuffle([correctAnswer, ...incorrectAnswers]);
    this.setState({ answers, message: '' });
  };

  handleSelection = e => {
    const {
      correctAnswer,
      handleCorrectAnswer,
      handleIncorrectAnswer,
    } = this.props;
    if (correctAnswer !== e.target.innerText) {
      handleIncorrectAnswer();
      this.setState({
        answered: true,
        message: 'Incorrect...',
        selected: e.target.innerText,
      });
    } else {
      handleCorrectAnswer();
      this.setState({
        answered: true,
        message: 'Correct!',
        selected: e.target.innerText,
      });
    }
  };

  handleNext = () => {
    const { handleNextQuestion } = this.props;
    handleNextQuestion();
    this.setState({ answered: false });
  };

  handleDisplayClass = str => {
    const { correctAnswer } = this.props;
    const { selected } = this.state;

    if (str === selected && str !== correctAnswer) {
      return 'incorrect';
    } else if (str === correctAnswer) {
      return 'correct';
    }
  };

  render() {
    const { text } = this.props;
    const { answers, answered, message } = this.state;

    const quizOptions = answers.map(a => (
      <li
        key={a}
        className={answered ? this.handleDisplayClass(a) : ''}
        onClick={answered ? null : this.handleSelection}
      >
        {a}
      </li>
    ));

    const afterAnswerDisplay = (
      <Fragment>
        <div className="answer-message">{message}</div>{' '}
        <button className="next-button" onClick={this.handleNext}>
          Next Question
        </button>
      </Fragment>
    );

    return (
      <Fragment>
        <div className="question">{text}</div>
        <ul className="answer-list">{quizOptions}</ul>
        {answered ? afterAnswerDisplay : null}
      </Fragment>
    );
  }
}

export default QuizCard;
