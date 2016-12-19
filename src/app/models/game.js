import Player from "app/models/player";
import Backbone from 'backbone';

const Game = Backbone.Model.extend({
  initialize: function(player1, player2) {

  this.set("currentBoard", [" ", " ", " ", " ", " ", " ", " ", " ", " "]);
  this.set("turnCounter", 0);

  this.player1 = new Player(player1, "X");
  this.player2 = new Player(player2, "O");
  this.activePlayer = this.player1;
  this.inactivePlayer = this.player2;
  },

  play: function(move) {
    if (move >= 0 && move < 9 && this.get("currentBoard")[move] == " ") {
      this.get("currentBoard")[move] = this.activePlayer.letter;
      if (this.winCheck(this.get("currentBoard")) == false && this.get("turnCounter") < 9){
        this.turnHandler();
      }
      this.scoreKeeper();
      return this.get("currentBoard");
    } else {
      throw new TypeError("Please choose a valid move.");
    }
  },

  winCheck: function(board) {
    if (board[0] == board[1] &&  board[1] == board[2] && board[0] != " ") {
      return true;
    } else if (board[3] == board[4] && board[4] == board[5] && board[3] != " ") {
      return true;
    } else if (board[6] == board[7] && board[7] == board[8] && board[6] != " ") {
      return true;
    } else if (board[0] == board[3] && board[3] == board[6] && board[0] != " ") {
      return true;
    } else if (board[1] == board[4] && board[4] == board[7] && board[1] != " ") {
      return true;
    } else if (board[2] == board[5] && board[5] == board[8] && board[2] != " ") {
      return true;
    } else if (board[2] == board[4] && board[4] == board[6] && board[2] != " ") {
      return true;
    } else if (board[0] == board[4] && board[4] == board[8] && board[0] != " ") {
      return true;
    } else {
      return false;
    }
  },

  turnHandler: function () {
    this.set("turnCounter", this.get("turnCounter") + 1);
    if (this.get("turnCounter") % 2 == 0) {
      this.activePlayer = this.player1;
      this.inactivePlayer = this.player2;
    } else {
      this.activePlayer = this.player2;
      this.inactivePlayer = this.player1;
    }
    return this.get("turnCounter");
  },

  scoreKeeper: function() {
    if (this.winCheck(this.get("currentBoard")) == true) {
      this.activePlayer.scorecard["Win"] += 1;
      this.inactivePlayer.scorecard["Lose"] += 1;
    } else if (this.get("turnCounter") == 8 && this.winCheck(this.get("currentBoard")) == false) {
      this.activePlayer.scorecard["Draw"] += 1;
      this.inactivePlayer.scorecard["Draw"] += 1;
    }
  },

  newGame: function() {
    this.set("currentBoard", [" ", " ", " ", " ", " ", " ", " ", " ", " "]);
    this.set("turnCounter", 0);
  }

});

module.exports = Game;
