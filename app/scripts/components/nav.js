import React from 'react';

export default React.createClass({
  render() {
    return (
      <nav>
        <h1 className="title">Jeopardy</h1>
        <button className="newGame" onClick={this.clickHandle}>Start Game</button>
      </nav>
    );
  },
  clickHandle() {
    console.log('new game started');
  }
});
