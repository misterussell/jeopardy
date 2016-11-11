import React from 'react';

export default React.createClass({
  render() {
    return (
      <li onClick={this.handleClick}>
        {this.props.question.get('value')}
      </li>
    );
  },
  handleClick(e) {
    e.preventDefault();
    console.log('clicked');
  }
});
