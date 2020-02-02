import React, { Component } from 'react';
import QuizCard from './QuizCard';
import Summary from './Summary';
import ProgressBar from './ProgressBar';

class MultipleChoiceQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizIndex: 0,
      questionIndex: 0,
      correctAnswers: 0,
      incorrectAnswers: 0,
    };
  }

  handleNextQuestion = () => {
    const questionIndex = this.state.questionIndex + 1;
    this.setState({ questionIndex });
  };

  handleNextQuiz = () => {
    const quizIndex = this.state.quizIndex + 1;
    const questionIndex = 0;
    const correctAnswers = 0;
    const incorrectAnswers = 0;
    this.setState({
      quizIndex,
      questionIndex,
      correctAnswers,
      incorrectAnswers,
    });
  };

  handleRestart = () => {
    const questionIndex = 0;
    const correctAnswers = 0;
    const incorrectAnswers = 0;
    const quizIndex = 0;
    this.setState({
      correctAnswers,
      incorrectAnswers,
      questionIndex,
      quizIndex,
    });
  };

  handleCorrectAnswer = () => {
    const correctAnswers = this.state.correctAnswers + 1;
    this.setState({ correctAnswers });
  };

  handleIncorrectAnswer = () => {
    const incorrectAnswers = this.state.incorrectAnswers + 1;
    this.setState({ incorrectAnswers });
  };

  render() {
    const {
      quizIndex,
      questionIndex,
      correctAnswers,
      incorrectAnswers,
    } = this.state;

    const { quizzes } = this.props;

    const currentQuiz = quizzes[quizIndex];
    const currentQuestion = currentQuiz.questions[questionIndex];
    const quizLength = currentQuiz.questions.length;

    return (
      <div className="quiz-area">
        <div className="quiz-title">{currentQuiz.title}</div>
        {questionIndex === quizLength ? (
          <Summary
            handleNextQuiz={this.handleNextQuiz}
            quizLength={quizLength}
            correctAnswers={correctAnswers}
            quizIndex={quizIndex}
            totalQuizes={quizzes.length}
            handleRestart={this.handleRestart}
          />
        ) : (
          <QuizCard
            handleNextQuestion={this.handleNextQuestion}
            handleCorrectAnswer={this.handleCorrectAnswer}
            handleIncorrectAnswer={this.handleIncorrectAnswer}
            {...currentQuestion}
          />
        )}
        <ProgressBar
          currentQuiz={currentQuiz}
          correctAnswers={correctAnswers}
          incorrectAnswers={incorrectAnswers}
        />
      </div>
    );
  }
}

export default MultipleChoiceQuiz;
