import React from 'react';

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
    const q = this.props.question;

    //value handling
    let value;
    if(!q.get('answered')) {
      value = q.get('value');
    } else value = '';

    //modal handling
    let modalBlock;
    if (this.state.modal) {
      modalBlock = <ModalBlock data={q}/>;
    } else modalBlock = '';

    return (
      <main>
        {modalBlock}
        <li onClick={this.handleClick}>
          {value}
        </li>
      </main>
    );
  },
  handleClick(e) {
    e.preventDefault();
    console.log(store);
    console.log(store.categories);
    let test = store.categories.get();
    console.log(test);
    test.get()
  }
});
