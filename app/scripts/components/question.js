import React from 'react';

import ModalBlock from './modalBlock';

import store from '../store';

export default React.createClass({
  render() {
    const q = this.props.question;
    //value handling
    let value;
    if(!q.get('answered')) {
      value = q.get('value');
    } else value = '';

    return (
      <main>
        <li onClick={this.handleClick}>
          {value}
        </li>
      </main>
    );
  },
  handleClick(e) {
    e.preventDefault();
    store.session.handleModal(this.props.question);
  }
});
