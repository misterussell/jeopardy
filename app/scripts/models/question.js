import Backbone from 'backbone';

export default Backbone.Model.extend({
  idAttribute: 'id',
  defaults: {
    category: '',
    question: '',
    answer: '',
    difficulty: ''
  },
  rootUrl: 'http://jservice.io/api/clues'
});
