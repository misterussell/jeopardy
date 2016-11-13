import React from 'react';

export default React.createClass({
  getInitialState() {
    return {
      score: this.props.data.get('score')
    };
  },
  componentWillMount() {
    this.props.data.on('change', () => {
      this.setState({
        score: this.props.data.get('score')
      });
    });
  },
  render() {
    return (
      <aside className="score">
        {this.state.score}
      </aside>
    );
  }
});
