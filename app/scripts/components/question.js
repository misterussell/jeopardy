import React from 'react';

import ModalBlock from './modalBlock';

import store from '../store';

export default React.createClass({
  // getInitialState() {
  //   return {
  //     modal: store.session.get('modal')
  //   };
  // },
  render() {
    const q = this.props.question;
    //value handling
    let value;
    if(!q.get('answered')) {
      value = q.get('value');
    } else value = '';

    //modal handling
    // let modalBlock;
    // store.session.on('change', () => {
    //   this.setState({modal: store.session.get('modal')});
    //   console.log(this.state.modal);
    //   if (this.state.modal) {
    //     modalBlock = <ModalBlock data={q}/>;
    //   } else modalBlock = '';
    // });

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
    store.session.handleModal();
    // this.setState({modal: true});
    // console.log(store);
    // console.log(store.categories);
    // this click handler will need to retrieve the id of the question, as well as the
    // id of the parent model so that we can sift through both of the levels and edit
    // that specific model
    // let test = store.categories.get();
    // changing the data will happen at the model level with a function
  }
});
