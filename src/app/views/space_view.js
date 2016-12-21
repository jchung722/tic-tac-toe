import $ from 'jquery';
import Backbone from 'backbone';

const SpaceView = Backbone.View.extend({
  initialize: function(options) {
    this.letter = options.letter;
    this.move = options.move;
  },

  render: function() {
    this.$el.html(this.letter);
    return this;
  },

  events: {
    'click': 'getMove'
  },

  getMove: function(event){
    this.model.play(this.move);
    this.trigger('updateBoard', this.model);
  }

})

export default SpaceView;
