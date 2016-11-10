import React from 'react';

export default React.createClass({
  render() {
    let questions = this.props.data.map((question, i, arr) => {
      return <li key={question.id}>{question.value}</li>;
    });
    return <ul>{questions}</ul>;
  }
});
