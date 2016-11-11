import $ from 'jquery';
import Backbone from 'backbone';

import cat from '../models/cat';

export default Backbone.Collection.extend({
  model: cat,
  parse(response) {
    return response;
  },
  newCategories() {
    // will randomize 6 numbers for use in the ajax requests we are using.
    let catNumbers = [];
    let i = 0;
    do {
      catNumbers[i] = Math.floor(Math.random() * 100) + 1;
      i++;
    } while (i<6);
    // console.log(catNumbers);
    return catNumbers;
  },
  getCategoryData() {
    let findCats = this.newCategories();
    findCats.forEach((cat, i, arr) => {
      $.ajax({
        type: 'GET',
        url: `http://jservice.io/api/category?id=${cat}`,
        success: (response) => {
          // window.console.log('Retrieved');
          // raw data stored to the collection with this
          this.add(response);
        },
        error(response) {
          window.console.log('Data not retrieved!');
        }
      });
    });
  }
});
