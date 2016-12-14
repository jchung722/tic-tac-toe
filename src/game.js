import _ from 'underscore';
import Player from "player";

var Game = function(player1, player2) {

  const GAME_TILES = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  var currentBoard = GAME_TILES;
  var turnCounter = 0;

  this.player1 = new Player(player1, "X");
  this.player2 = new Player(player2, "O");
  this.activePlayer = this.player1;
  this.inactivePlayer = this.player2;

  Game.prototype.play = function(player, move) {
    if (move >= 0 && move < 9 && currentBoard[move] == " ") {
      currentBoard[move] = player.letter;
      console.log(currentBoard);
      // console.log(this.winCheck(currentBoard))
      if (this.winCheck(currentBoard) == false && turnCounter < 9){
        this.turnHandler();
      };
      // console.log(currentBoard);
      this.score();
      console.log(this.activePlayer.scorecard);
      console.log(this.inactivePlayer.scorecard);
      return currentBoard;
    } else {
      throw new TypeError("Please choose a valid move.");
    };
  }

  // Score is also incrementing with every move as a result. turnCounter is verified as working via test. Weird things are happening with tracking of moves with X and O - sometimes things disappear? - and only one side's letters are showing until the third or fourth move.

  Game.prototype.winCheck = function(board) {
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
  };

  Game.prototype.turnHandler = function () {
    turnCounter += 1;
    if (turnCounter % 2 == 0) {
      this.activePlayer = this.player1;
      this.inactivePlayer = this.player2;
    } else {
      this.activePlayer = this.player2;
      this.inactivePlayer = this.player1;
    };
    return turnCounter;
  };

  Game.prototype.score = function() {
    if (this.winCheck(currentBoard) == true) {
      this.activePlayer.scorecard["Win"] += 1;
      this.inactivePlayer.scorecard["Lose"] += 1;
    } else if (turnCounter == 8 && this.winCheck(currentBoard) == false) {
      this.activePlayer.scorecard["Draw"] += 1;
      this.inactivePlayer.scorecard["Draw"] += 1;
    }
  };


};

module.exports = Game;
