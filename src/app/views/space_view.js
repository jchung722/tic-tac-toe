import Backbone from 'backbone';

const SpaceView = Backbone.View.extend({
  initialize: function(options) {
    this.letter = options.letter
  },

  render: function() {
    this.$el.html(this.letter);
    return this;
  }


})

export default SpaceView;
