import React from 'react';
import Question from './question';

export default React.createClass({
  render() {
    console.log(this.props);
    console.log(this.props.category);
    let category = this.props.category.map((cat, i, arr) => {
      return (
        <div key={cat.id} className="question-list">
          <h1 key>{cat.title}</h1>
          <ul>
            <Question data={cat.clues} />
          </ul>
        </div>
      );
    });
    return <div> {category} </div>;
  }
});
