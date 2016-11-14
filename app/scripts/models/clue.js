import Backbone from 'backbone';

export default Backbone.Model.extend({
  idAttribute: 'id',
  defaults: {
    value: 100,
    answer: '',
    answered: false
  },
  changeStatus() {
    this.set({answered: true});
  }
});
