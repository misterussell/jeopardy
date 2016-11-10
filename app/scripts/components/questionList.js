import React from 'react';
import Question from './question';

export default React.createClass({
  render() {
    return (
      <div className="question-list">
      <h1>Topic</h1>
        <ul>
          <Question />
        </ul>
      </div>
    );
  }
});
