import Game from "game";

describe('Game', function() {

  var testGame;
  beforeEach(function() {
    testGame = new Game("elle", "jessica");
  });

  describe('get name and letter for player object in game', function() {
    it('should return player name and letter', function() {
      expect(testGame.player1.name).toEqual("ELLE");
      expect(testGame.player2.name).toEqual("JESSICA");
    });
  });


});
