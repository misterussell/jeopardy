import React from 'react';

export default React.createClass({
  getInitialState() {
    return {
      answer: this.props.data
    }
  },
  componentWillMount() {

  },
  render() {
    return (
      <aside className="answer">
        {this.props.answer}
      </aside>
    );
  }
});
