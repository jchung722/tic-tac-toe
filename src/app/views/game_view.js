import Backbone from 'backbone';
import BoardView from 'app/views/board_view';

const GameView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  render: function() {
    const boardView = new BoardView({
      model: this.model,
      el: this.$('main')
    })
  }
})
