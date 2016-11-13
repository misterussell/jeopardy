import React from 'react';

//components
import Nav from '../Nav';
import Categories from '../categories';
import Modal from '../modalBlock';
import ScoreKeeper from '../scoreKeeper';

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
    store.session.on('update change', () => {
      this.setState({
        session: store.session
      });
    });
  },
  render() {
    return (
      <div className="jeopardy-game">
        <Nav />
        <Categories category={this.state.cats} />
        <Modal data={this.state.session} />
        <ScoreKeeper data={this.state.session} />
      </div>
    );
  }
});
