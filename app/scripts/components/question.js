import React from 'react';

import ModalBlock from './modalBlock';

import store from '../store';

export default React.createClass({
  getInitialState() {
    return {
      question: this.props.question
    };
  },
  componentWillMount() {
    this.props.question.on('change', () => {
      this.setState({
        question: this.props.question
      });
    });
  },
  render() {
    let listItem;
    //value handling
    if(!this.state.question.get('answered')) {
      listItem = (
        <li onClick={this.handleClick}>
          {this.state.question.get('value')}
        </li>
      );
    } else {
      listItem = <li></li>;
    }

    return (
      <main>
        {listItem}
      </main>
    );
  },
  handleClick(e) {
    e.preventDefault();
    this.props.question.changeStatus();
    store.session.handleModal(this.props.question);
  }
});
