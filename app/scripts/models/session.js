import Backbone from 'backbone';

export default Backbone.Model.extend({
  defaults: {
    modal: false,
    answerBoxText: '',
    score: 0,
    question: null
  },
  handleModal(question) {
    //conditional addition of selected question data
    //nothing set if no question is entered as this assumes modal should hide
    if (question) {
      this.set({question});
    }
    //conditional toggle of modal status to show/hide
    if (!this.get('modal')) {
      this.set({modal: true});
    } else {
      this.set({modal: false});
    }
  },
  checkAnswer(userAnswer) {
    let answer = this.get('question').get('answer');
    if (userAnswer === answer) {
      alert(`${answer} is correct`);
      this.calculateScore();
    } else {
      alert(`${answer} was the correct choice.`);
      this.calculateScore();
    }
    this.updateAnswer(answer);
  },
  calculateScore() {
    let currentScore = this.get('score');
    let questionVal = this.get('question').get('value');
    currentScore += questionVal;
    this.set({score: currentScore});
    console.log(this.get('score'));
  },
  updateAnswer(newAnswer) {
    this.set({answerBoxText: newAnswer});
  }
});
