import React from 'react';

import Question from './question';

export default React.createClass({
  render() {
    let questions = this.props.data.map((question, i, arr) => {
      return <Question key={question.get('id')} question={question} />
    });
    return <ul>{questions}</ul>;
  }
});
