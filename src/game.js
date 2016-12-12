var Game = function(player1, player2) {

  const GAME_TILES = [" ", " ", " ", " ", " ", " ", " ", " ", " "]

  this.player1 = new Player(player1);
  this.player2 = new Player(player2);

  

}

module.exports = Game;
