import React from 'react';

//components
import Nav from '../Nav';
import Categories from '../categories';
import Modal from '../modalBlock';
import Answer from '../answer';
import Score from '../score';

//data store
import store from '../../store';

export default React.createClass({
  getInitialState() {
    return {
      cats: store.categories.toJSON(),
      session: store.session
    };
  },
  componentWillMount() {
    store.categories.getCategoryData();
    // console.log(store.session.get('score'));
    // this.setState({ score: store.session.get('score') });
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
        <Modal data={this.state.session} />
        <Answer answers={this.state.answer} />
        <Score score={this.state.score} />
      </div>
    );
  }
});
