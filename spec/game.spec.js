import Game from "game";
import Player from "game";

describe('Game', function() {
  var player1;
  var player2;
  var testGame;
  beforeEach(function() {
    testGame = new Game("elle", "jessica");
    player1 = new Player("elle", "X");
    player2 = new Player("jessica", "O");
  });

  describe('Game', function() {
    it('should return player name and letter', function() {
      expect(testGame.player1.name).toEqual("ELLE");
      expect(testGame.player2.name).toEqual("JESSICA");
    });
  });

  describe('winCheck', function() {
    it('should return true if there is a winner', function() {
      expect(testGame.winCheck(["X", "X", "X", " ", " ", " ", " ", " ", " "])).toEqual(true);
    });

    it('should return false with an empty board', function() {
      expect(testGame.winCheck([" ", " ", " ", " ", " ", " ", " ", " ", " "])).toEqual(false);
    });

    it('should return false when the board is filled but there is no winner', function() {
      expect(testGame.winCheck(["X", "X", "O", "O", "O", "X", "X", "O", "X"])).toEqual(false);
    });
  }); // describe winCheck end

  describe('play', function() {
    it('should return move in board', function() {
      expect(testGame.play(testGame.player1, 2)).toEqual([" ", " ", "X", " ", " ", " ", " ", " ", " "]);
      expect(testGame.play(testGame.player2, 1)).toEqual([" ", "O", "X", " ", " ", " ", " ", " ", " "]);
    });

    it('should throw an error if move made in spot that is taken', function() {
      expect(testGame.play(testGame.player2, 2)).toEqual([" ", " ", "O", " ", " ", " ", " ", " ", " "]);
      expect(function() { testGame.play(testGame.player1, 2);}).toThrow(TypeError("Please choose a valid move."));
    });

    it('should throw an error if move outside 0-8 are used', function() {
      expect(function() { testGame.play(testGame.player1, 10);}).toThrow(TypeError("Please choose a valid move."));
    });

    it('should throw an error if move is a string', function() {
      expect(function() { testGame.play(testGame.player1, "a");}).toThrow(TypeError("Please choose a valid move."));
    });
  }); //describe play end

  describe('turnHandler', function() {
    it('should increment turnCounter', function() {
      expect(testGame.turnHandler()).toEqual(1);
      expect(testGame.turnHandler()).toEqual(2);
    });

    it('should swap activePlayer', function() {
      expect(testGame.activePlayer.name).toEqual("ELLE");
      expect(testGame.turnHandler()).toEqual(1);
      expect(testGame.activePlayer.name).toEqual("JESSICA");
      expect(testGame.turnHandler()).toEqual(2);
      expect(testGame.turnHandler()).toEqual(3);
    });
  });


});

describe('Player', function() {

  describe('get name assigned to player', function() {
    it('should return the name of the player', function() {
      expect(player1.name).toEqual("ELLE");
      expect(player1.letter).toEqual("X");
      expect(player2.name).toEqual("JESSICA");
      expect(player2.letter).toEqual("O");
    });
  });

  describe('get scorecard assigned to player with defaults of 0', function() {
    it('should return the player scorecard', function() {
      expect(player1.scorecard).toEqual({ "Win":0, "Lose": 0, "Draw": 0});
      expect(player1.scorecard["Win"]).toEqual(0);
      // expect(player2.name).toEqual("JESSICA");
      // expect(player2.letter).toEqual("O");
    });
  });


});
