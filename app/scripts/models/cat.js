import Backbone from 'backbone';

import Clue from './clue';

export default Backbone.Model.extend({
  initialize(response) {
    this.set(this.parse(response));
  },
  defaults: {
        title: '',
        id: '',
        clues: [],
  },
  parse(response) {
    // console.log(category.clues);
    // need to create an array with only 1 question of each value
    // console.log(response);
    let filtered = {
      title: response.title,
      id: response.id,
      clues: []
    };
    response.clues.forEach((clue, i, arr) => {
      let x = 0;
      let vals = [100,200,300,400,500,600,700,800];
      do {
        if (clue.value===vals[x]) {
          filtered.clues[x] = new Clue(clue);
        }
        x++;
      } while (x <= vals.length);
    });
    return filtered;
  }
});
