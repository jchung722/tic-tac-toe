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

    if(this.model.activePlayer == this.model.player1) {
      playerOne.render().$('h3').css({"border-top": "1px solid black", "border-bottom": "1px solid black"})
    } else {
      playerTwo.render().$('h3').css({"border-top": "1px solid black", "border-bottom": "1px solid black"})
    }

    if(this.model.winCheck(this.model.currentBoard) == true) {
      alert(this.model.inactivePlayer.get("name") + " IS THE WINNER!");
      this.model.saveGame();
    } else if(this.model.turnCounter == 9 && this.model.winCheck(this.model.currentBoard) == false) {
      alert("IT IS A DRAW!");
      this.model.saveGame();
    }
  },

  events: {
    'click #clear': 'newGame'
    // 'click #save': 'saveGame'
  },

  newGame: function(){
    this.model.newGame();
    this.render();
  }

  // saveGame: function(){
  //   console.log('saved ya');
  // }
})

export default GameView;
