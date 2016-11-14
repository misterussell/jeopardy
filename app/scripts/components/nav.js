import React from 'react';

import store from '../store';

export default React.createClass({
  render() {
    return (
      <nav>
        <h1 className="title">Jeopardy</h1>
        <button className="newGame" onClick={this.clickHandle}>Start Game</button>
      </nav>
    );
  },
  clickHandle(e) {
    e.preventDefault();
    store.categories.reset();
    store.categories.loadData();
  }
});
