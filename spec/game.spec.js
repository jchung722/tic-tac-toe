import Game from "game";

describe('Game', function() {

  var testGame;
  beforeEach(function() {
    testGame = new Game("elle", "jessica");
  });

  describe('Game', function() {
    it('should return player name and letter', function() {
      expect(testGame.player1.name).toEqual("ELLE");
      expect(testGame.player2.name).toEqual("JESSICA");
    });
  });

  describe('winCheck', function() {
    it('should return true if there is a winner', function() {
      expect(testGame.winCheck(["X", "X", "X", " ", " ", " ", " ", " ", " "]));
    });

    it('should return false with an empty board', function() {
      expect(testGame.winCheck([" ", " ", " ", " ", " ", " ", " ", " ", " "]));
    });

    it('should return false when the board is filled but there is no winner', function() {
      expect(testGame.winCheck(["X", "X", "O", "O", "O", "X", "X", "O", "X"]));
    });
  });


});
