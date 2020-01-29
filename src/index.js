import React from 'react';
import ReactDOM from 'react-dom';

import { quizzes } from './quizzes';
import './styles.css';
import MultipleChoiceQuiz from './MultipleChoiceQuiz';

console.log('Here are the quizzes:', quizzes);

const App = () => {
  return (
    <div className="app">
      <MultipleChoiceQuiz />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
