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
    // console.log(this.state.cats);
    store.categories.on('update change', () => {
      this.setState({
        cats: store.categories.toJSON()
      });
    });
  },
  render() {
    console.log(this.state.cats);
    return (
      <div className="jeopardy-game">
        <Nav />
        <QuestionList category={this.state.cats}/>
        <Answer />
        <Score />
      </div>
    );
  }
});
