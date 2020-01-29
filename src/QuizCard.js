import React, { Component } from 'react';
import { shuffle } from './helpers';

class QuizCard extends Component {
  constructor(props) {
    super(props);
    this.state = { answers: [], answered: false };
  }

  componentDidMount() {
    const { correctAnswer, incorrectAnswers } = this.props;
    const answers = shuffle([correctAnswer, ...incorrectAnswers]);
    this.setState({ answers });
  }
  render() {
    return <div></div>;
  }
}

export default QuizCard;
