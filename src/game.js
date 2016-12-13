import _ from 'underscore';
import Player from "player";

var Game = function(player1, player2) {

  const GAME_TILES = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  var currentBoard = GAME_TILES;
  var turnCounter = 0;

  this.player1 = new Player(player1, "X");
  this.player2 = new Player(player2, "O");
  this.activePlayer = this.player1;

  // player1.letter for move
  Game.prototype.play = function(player, move) {
    if (move >= 0 && move < 9 && currentBoard[move] == " ") {
      currentBoard[move] = player.letter;
      return currentBoard;
    } else {
      throw new TypeError("Please choose a valid move.");
    };
  }

  Game.prototype.winCheck = function(board) {
    if (board[0] == board[1] == board[2] && board[0] != " ") {
      return true;
    } else if (board[3] == board[4] == board[5] && board[3] != " ") {
      return true;
    } else if (board[6] == board[7] == board[8] && board[6] != " ") {
      return true;
    } else if (board[0] == board[3] == board[6] && board[0] != " ") {
      return true;
    } else if (board[1] == board[4] == board[7] && board[1] != " ") {
      return true;
    } else if (board[2] == board[5] == board[8] && board[2] != " ") {
      return true;
    } else if (board[2] == board[4] == board[6] && board[2] != " ") {
      return true;
    } else if (board[0] == board[4] == board[8] && board[0] != " ") {
      return true;
    } else {
      return false;
    }
  };

  Game.prototype.turnHandler = function () {
    turnCounter += 1;
    if (turnCounter % 2 == 0) {
      this.activePlayer = this.player1;
    } else {
      this.activePlayer = this.player2;
    }
    console.log(turnCounter);
    console.log(this.activePlayer);
    return turnCounter
  };


};

module.exports = Game;
