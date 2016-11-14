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
    let trimmedAnswer = this.get('question').get('answer').toLowerCase().replace(/\<[\/]?i\>/g, '');
    if (userAnswer === trimmedAnswer) {
      alert(`${answer} is correct`);
      this.calculateScore();
    } else if (userAnswer === 'pass'){
      alert(`The correct answer was ${answer}`);
    } else {
      alert(`No Beans! ${answer} was the correct choice.`);
    }
    this.updateAnswer(answer);
  },
  calculateScore() {
    let currentScore = this.get('score');
    let questionVal = this.get('question').get('value');
    currentScore += questionVal;
    this.set({score: currentScore});
  },
  updateAnswer(newAnswer) {
    this.set({answerBoxText: newAnswer});
  }
});
