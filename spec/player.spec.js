import Player from "player";

describe('Player', function() {
  var player1;
  var player2;
  beforeEach(function() {
    player1 = new Player("elle", "X");
    player2 = new Player("jessica", "O");
  });

  describe('get name assigned to player', function() {
    it('should return the name of the player', function() {
      expect(player1.name).toEqual("ELLE");
      expect(player1.letter).toEqual("X");
      expect(player2.name).toEqual("JESSICA");
      expect(player2.letter).toEqual("O");
    });
  });


});
