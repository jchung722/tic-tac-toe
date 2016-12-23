import Player from "app/models/player";
import Backbone from 'backbone';

const Game = Backbone.Model.extend({

  url: 'http://localhost:3000/api/v1/games',

  initialize: function(player1, player2) {
  this.player1 = new Player(player1, "X");
  this.player2 = new Player(player2, "O");
  this.activePlayer = this.player1;
  this.inactivePlayer = this.player2;

  this.set("board", [" ", " ", " ", " ", " ", " ", " ", " ", " "]);
  this.set("players", [this.player1.get("name"), this.player2.get("name")]);
  this.set("outcome", null);
  this.turnCounter = 0;
  },

  play: function(move) {
    if (move >= 0 && move < 9 && this.get("board")[move] == " " && this.winCheck(this.get("board")) == false && this.turnCounter < 9) {
      this.get("board")[move] = this.activePlayer.get("letter");
      this.scoreKeeper();
      this.turnHandler();
      return this.get("board");
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
    this.turnCounter += 1;
    if (this.turnCounter % 2 == 0) {
      this.activePlayer = this.player1;
      this.inactivePlayer = this.player2;
    } else {
      this.activePlayer = this.player2;
      this.inactivePlayer = this.player1;
    }
    return this.turnCounter;
  },

  scoreKeeper: function() {
    if (this.winCheck(this.get("board")) == true) {
      this.activePlayer.get("scorecard").win += 1;
      this.inactivePlayer.get("scorecard").lose += 1;
      this.set("outcome", this.activePlayer.get("letter"));
    } else if (this.turnCounter == 8 && this.winCheck(this.get("board")) == false) {
      this.activePlayer.get("scorecard").draw += 1;
      this.inactivePlayer.get("scorecard").draw += 1;
      this.set("outcome", "draw");
    }
  },

  newGame: function() {
    this.set("board", [" ", " ", " ", " ", " ", " ", " ", " ", " "]);
    this.turnCounter = 0;
    this.activePlayer = this.player1;
    this.inactivePlayer = this.player2;
  },

  saveGame: function() {
    this.save();
  }

});

export default Game;
