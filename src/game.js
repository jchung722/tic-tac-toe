import Player from "player";

var Game = function(player1, player2) {

  const GAME_TILES = [" ", " ", " ", " ", " ", " ", " ", " ", " "]

  this.player1 = new Player(player1, "X");
  this.player2 = new Player(player2, "O");

  // player1.letter for move


}

module.exports = Game;
