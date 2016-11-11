import React from 'react';

export default React.createClass({
  render() {
    return (
      <aside className="score">
        ${this.props.score}
      </aside>
    );
  }
});
