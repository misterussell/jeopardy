import React from 'react';

import Nav from '../Nav';
import QuestionList from '../questionList';
import Answer from '../answer';
import Score from '../score';
import store from '../../store';

export default React.createClass({
  getInitialState() {
    return {
      cats: store.categories.toJSON()
    };
  },
  componentWillMount() {
    store.categories.getCategoryData();
    store.categories.on('update change', () => {
      this.setState({
        cats: store.categories.toJSON()
      });
    });
  },
  render() {
    return (
      <div className="jeopardy-game">
        <Nav />
        <QuestionList />
        <Answer />
        <Score />
      </div>
    );
  }
});
