import React from 'react';

export default React.createClass({
  getInitialState() {
    return {
      answer: this.props.data.get('answerBoxText')
    };
  },
  componentWillMount() {
    this.props.data.on('change', () => {
      this.setState({
        answer: this.props.data.get('answerBoxText')
      });
    });
  },
  render() {
    // console.log(this.state.answer);
    return (
      <aside className="answer">
        {this.state.answer}
      </aside>
    );
  }
});
