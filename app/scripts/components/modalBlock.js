import React from 'react';

import store from '../store';

export default React.createClass({
  getInitialState() {
    return {
      modal: this.props.data.get('modal')
    }
  },
  componentWillMount() {
    this.props.data.on('change', () => {
      this.setState({
        modal: this.props.data.get('modal')
      });
    });
  },
  render() {
  let modalBlock = <div className="emptyModal"></div>;
  if (this.state.modal) {
      modalBlock = (
        <aside className="modal">
          <div className="modalQuestion">
            <p>{this.props.data.get('question').get('question')}</p>
              <input type="text" placeholder="Answer here" id="answer"/>
              <button type="button" name="button" className="modal-button confirm" onClick={this.handleClick}>Check Answer</button>
              <button type="button" name="button" className="modal-button pass" onClick={this.handleClick}>Pass</button>
          </div>
        </aside> );
    }
    return modalBlock;
  },
  handleClick(e) {
    // confirm needs to check the answer
    // after checking the answer if it is right, the session score should be adjusted
    // if the answer was wrong the session store should not be adjusted
    e.preventDefault();
    let userAnswer = document.getElementById('answer').value.trim();
    console.log(userAnswer);
    if (userAnswer === '') {
      alert('Please enter a valid answer');
    } else {
      console.log('failed')
      this.props.data.checkAnswer(userAnswer);
      this.props.data.handleModal();
    }
  }
});













// OLD Data
// <aside className="modal">
//   <div className="modalQuestion">
//     <h4>Category Title Here</h4>
//     <p>{this.props.data.get('question')}</p>
//     <form className="question-form" action="index.html" method="post">
//       <input type="text" placeholder="Answer here" className="answer" value=""/>
//       <button type="button" name="button" className="modal-button confirm" onClick={this.handleConfirm}>Check Answer</button>
//       <button type="button" name="button" className="modal-button pass" onClick={this.handleCancel}>Pass</button>
//     </form>
//   </div>
// </aside> );
