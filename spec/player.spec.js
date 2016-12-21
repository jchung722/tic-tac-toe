import Player from "app/models/player";

describe('Player', function() {
  var player1;
  var player2;
  beforeEach(function() {
    player1 = new Player("elle", "X");
    player2 = new Player("jessica", "O");
  });

  describe('get name assigned to player', function() {
    it('should return the name of the player', function() {
      expect(player1.get("name")).toEqual("ELLE");
      expect(player1.get("letter")).toEqual("X");
      expect(player2.get("name")).toEqual("JESSICA");
      expect(player2.get("letter")).toEqual("O");
    });
  });

  describe('get scorecard assigned to player with defaults of 0', function() {
    it('should return the player scorecard', function() {
      expect(player1.get("scorecard")).toEqual({ win:0, lose: 0, draw: 0});
      expect(player1.get("scorecard").win).toEqual(0);
    });
  });


});
