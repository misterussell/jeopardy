import Backbone from 'backbone';

export default Backbone.Model.extend({
  defaults: {
    modal: false,
    answerBoxText: '',
    score: 0,
    question: null
  },
  handleModal() {
    if (!this.get('modal')) {
      this.set({modal: true});
      console.log('modal changed to true');
    } else {
      this.set({modal: false});
      console.log('modal changed to false');
    }
  }
});
