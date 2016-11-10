import $ from 'jquery';
import Backbone from 'backbone';

import cat from '../models/cat';

export default Backbone.Collection.extend({
  model: cat,
  newCategories() {
    //will randomize 6 numbers for use in the ajax requests we are using.
  },
  getCategoryData() {
    $.ajax({
      type: 'GET',
      url: 'http://jservice.io/api/category?id=245',
      success: (response) => {
          window.console.log(this);
          window.console.log('Retrieved');
          this.add(response);
      },
      error(response) {
        window.console.log('Data not retrieved!');
      }
    });
  },
  sortClues() {
    
  }
});
