import React from 'react';
import QuestionList from './questionList';

export default React.createClass({
  render() {
    let category = this.props.category.map((cat, i, arr) => {
      return (
        <div key={cat.id} className="question-list">
          <h1 key>{cat.title}</h1>
            <QuestionList data={cat.clues} />
        </div>
      );
    });
    return <div> {category} </div>;
  },
  handleClick() {
    return null;
  }
});
