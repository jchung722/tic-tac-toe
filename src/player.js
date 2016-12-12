var Player = function(name) {
  this.name = name.toUpperCase();
  // this.playerWords = [];
  // var game = new Game();

  Player.prototype.playerName = function() {
    return this.name;
  };
};

module.exports = Player;
