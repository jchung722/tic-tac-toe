import $ from 'jquery';
import Backbone from 'backbone';
import BoardView from 'app/views/board_view';

const GameView = Backbone.View.extend({
  initialize: function() {

  },

  render: function() {
    const boardView = new BoardView({
      model: this.model,
      el: this.$('main')
    })
    boardView.render();
  },

  events: {
    'click #clear': 'newGame'
  },

  newGame: function(){
    this.model.newGame();
    this.render();
  }
})

export default GameView;
