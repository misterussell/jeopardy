import React from 'react';

import Answer from './answer';
import Score from './score';

export default React.createClass({
  getInitialState() {
    return {
      session: this.props.data
    };
  },
  componentWillMount() {
    this.props.data.on('update change', () => {
      this.setState({
        session: this.props.data
      });
    });
  },
  render() {
    return (
      <div className="score-keeper">
        <Answer data={this.state.session} />
        <Score data={this.state.session} />
      </div>
    );
  }
});
