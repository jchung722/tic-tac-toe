import Player from "player";

describe('Player', function() {
  var player1;
  var player2;
  beforeEach(function() {
    player1 = new Player("elle");
    player2 = new Player("jessica");
  });

  describe('playerName', function() {
    it('should return the name of the player', function() {
      expect(player1.name).toEqual("ELLE");
      expect(player2.name).toEqual("JESSICA");
    });
  });
});
