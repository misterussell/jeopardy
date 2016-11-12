import Backbone from 'backbone';

export default Backbone.Model.extend({
  defaults: {
    modal: false,
    answerBoxText: '',
    score: 0,
    question: null
  },
  handleModal(question) {
    if (question) {
      this.set({question});
      console.log(this.get('question'));
    }
    if (!this.get('modal')) {
      this.set({modal: true});
      console.log('modal changed to true');
    } else {
      this.set({modal: false});
      console.log('modal changed to false');
    }
  },
  checkAnswer() {
    if (userAnswer === this.get('answer')) {
      console.log('you got it right');
    } else {
      console.log('you got it wrong');
    }
    this.updateAnswer(this.get('answer'));
  },
  calculateScore() {

  },
  updateAnswer() {
    this.set({answerBoxText: this.get('answer')})
  }
});
