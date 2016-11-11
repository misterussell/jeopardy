import React from 'react';

//components
import Nav from '../Nav';
import Categories from '../categories';
import Answer from '../answer';
import Score from '../score';

//data store
import store from '../../store';

export default React.createClass({
  getInitialState() {
    return {
      cats: store.categories.toJSON(),
      score: store.session.score
    };
  },
  componentWillMount() {
    store.categories.getCategoryData();
    // console.log(store.session.get('score'));
    this.setState({ score: store.session.get('score') });
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
        <Categories category={this.state.cats} />
        <Answer answers={this.state.cats} />
        <Score score={this.state.score} />
      </div>
    );
  }
});
