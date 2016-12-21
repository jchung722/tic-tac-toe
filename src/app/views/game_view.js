import $ from 'jquery';
import Backbone from 'backbone';
import BoardView from 'app/views/board_view';
import PlayerView from 'app/views/player_view';

const GameView = Backbone.View.extend({
  initialize: function() {

  },

  render: function() {
    const boardView = new BoardView({
      model: this.model,
      el: this.$('main')
    });
    boardView.render();
    this.listenTo(boardView, 'updateScore', this.render);
    this.$('#score').empty();
    const playerOne = new PlayerView({
      model: this.model.player1,
    });
    this.$('#score').append(playerOne.render().$el)
    const playerTwo = new PlayerView({
      model: this.model.player2,
    });
    this.$('#score').append(playerTwo.render().$el)
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
