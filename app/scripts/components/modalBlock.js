import React from 'react';

export default React.createClass({
  render() {
    console.log(this.props.data);
    return (
      <aside className="modal">
        <div className="modalQuestion">
          <h4>Category Title Here</h4>
          <p>{this.props.data.get('question')}</p>
          <form className="question-form" action="index.html" method="post">
            <input type="text" placeholder="Answer here" className="answer" value=""/>
            <button type="button" name="button" className="modal-button confirm" onClick={this.handleConfirm}>Check Answer</button>
            <button type="button" name="button" className="modal-button pass" onClick={this.handleCancel}>Pass</button>
          </form>
        </div>
      </aside> );
  },
  handleConfirm(e) {
    e.preventDefault();
    // confirm needs to check the answer
    // after checking the answer if it is right, the session score should be adjusted
    // if the answer was wrong the session store should not be adjusted
    console.log('confirm clicked');
  },
  handlePass(e) {
    e.preventDefault();
    // cancel should close the modal and not affect any of the parameters
    console.log('cancel clicked');
  }
});
