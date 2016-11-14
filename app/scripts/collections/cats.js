import $ from 'jquery';
import Backbone from 'backbone';

import cat from '../models/cat';

import store from '../store';

export default Backbone.Collection.extend({
  model: cat,
  parse(response) {
    return response;
  },
  newCategoryId() {
      return Math.floor(Math.random() * 300) + 1;
  },
  getCategoryData() {
    let id = this.newCategoryId();
    $.ajax({
      type: 'GET',
      url: `http://jservice.io/api/category?id=${id}`,
      success: (response) => {
        // send response to a function that checks the data to ensure it has the minimum number of clues
        this.checkData(response);
      },
      error(response) {
        window.console.log('Data not retrieved!');
      }
    });
  },
  checkData(category) {
    //checks category to ensure minimum number of clues were met
    // console.log(store);
    if (category.clues_count < 30) {
      this.getCategoryData();
      window.console.log('Less than 30 questions, searching again.');
    } else {
      window.console.log('More than 30 questions, adding collection.');
      this.add(category);
    }
  },
  loadData() {
    for (let i=0 ; i < 6; i++) {
      this.getCategoryData();
    }
  }
});
