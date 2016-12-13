import _ from 'underscore';
import Player from "player";

var Game = function(player1, player2) {

  const GAME_TILES = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  var currentBoard = GAME_TILES;

  this.player1 = new Player(player1, "X");
  this.player2 = new Player(player2, "O");

  // player1.letter for move

  var winCheck = function(board) {
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


  };

module.exports = Game;
