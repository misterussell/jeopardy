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
        <h6 onClick={this.handleClick}>
          {this.state.question.get('value')}
        </h6>
      );
    } else {
      listItem = <h6></h6>;
    }

    return (
        <li>{listItem}</li>
    );
  },
  handleClick(e) {
    e.preventDefault();
    this.props.question.changeStatus();
    store.session.handleModal(this.props.question);
  }
});
