import React from 'react';

import Question from './question';
import ModalBlock from './modalBlock';

import store from '../store';

export default React.createClass({
  getInitialState() {
    return {
      score: store.score,
      modal: false
    };
  },
  render() {
    let modalBlock;
    if (this.state.modal) {
      modalBlock = <ModalBlock />;
    } else modalBlock = '';
    let questions = this.props.data.map((question, i, arr) => {
      return <Question key={question.get('id')} question={question} />
    });
    return (
      <main>
        {modalBlock}
        <ul>{questions}</ul>
      </main>
      );
  },
  handleClick(e) {
    e.preventDefault();
    //on click should render modal
    this.setState({modal: true});
    console.log('clicked');
    console.log(e.target);

  }
});

//change the state at the very top level if if the question is answered
