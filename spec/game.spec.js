import Game from "app/models/game";

describe('Game', function() {

  var testGame;
  beforeEach(function() {
    testGame = new Game("elle", "jessica");
  });


  describe('Game', function() {
    it('should return player name', function() {
      expect(testGame.player1.get("name")).toEqual("ELLE");
      expect(testGame.player2.get("name")).toEqual("JESSICA");
    });

    it('should assign letter X to player 1 and letter O to player 2', function() {
      expect(testGame.player1.get("letter")).toEqual("X");
      expect(testGame.player2.get("letter")).toEqual("O");
      expect(testGame.player1.get("letter")).not.toEqual("O");
      expect(testGame.player2.get("letter")).not.toEqual("X");
    });

  });


  describe('winCheck', function() {
    it('should return true if there is a winner', function() {
      expect(testGame.winCheck(["X", "X", "X", " ", " ", " ", " ", " ", " "])).toEqual(true);
    });

    it('should return false with an empty board', function() {
      expect(testGame.winCheck([" ", " ", " ", " ", " ", " ", " ", " ", " "])).toEqual(false);
    });

    it('should return false if there is not a winner yet', function() {
      expect(testGame.winCheck(["X", "X", " ", "O", "O", " ", " ", " ", " "])).toEqual(false);
    });

    it('should return false when the game ends in draw', function() {
      expect(testGame.winCheck(["X", "X", "O", "O", "O", "X", "X", "O", "X"])).toEqual(false);
    });
  }); // describe winCheck end


  describe('play', function() {
    it('should return move in board', function() {
      expect(testGame.play(2)).toEqual([" ", " ", "X", " ", " ", " ", " ", " ", " "]);
      expect(testGame.play(1)).toEqual([" ", "O", "X", " ", " ", " ", " ", " ", " "]);
    });

    it('should throw an error if move made in spot that is taken', function() {
      expect(testGame.play(2)).toEqual([" ", " ", "X", " ", " ", " ", " ", " ", " "]);
      expect(function() { testGame.play(2)}).toThrow(TypeError("Please choose a valid move."));
    });

    it('should throw an error if move outside 0-8 are used', function() {
      expect(function() { testGame.play(10)}).toThrow(TypeError("Please choose a valid move."));
    });

    it('should throw an error if move is a string', function() {
      expect(function() { testGame.play("a")}).toThrow(TypeError("Please choose a valid move."));
    });

    it('should return the board after a win', function() {
      testGame.play(6);
      testGame.play(4);
      testGame.play(7);
      testGame.play(5);
      expect(testGame.play(8)).toEqual([" ", " ", " ", " ", "O", "O", "X", "X", "X"])
    });

    it('should return the board after a draw', function() {
      testGame.play(0);
      testGame.play(2);
      testGame.play(1);
      testGame.play(3);
      testGame.play(5);
      testGame.play(4);
      testGame.play(6);
      testGame.play(7);
      expect(testGame.play(8)).toEqual(["X", "X", "O", "O", "O", "X", "X", "O", "X"]);
    });
  }); //describe play end


  describe('turnHandler', function() {
    it('should increment turnCounter', function() {
      expect(testGame.turnHandler()).toEqual(1);
      expect(testGame.turnHandler()).toEqual(2);
    });

    it('should swap activePlayer', function() {
      expect(testGame.get("activePlayer").get("name")).toEqual("ELLE");
      expect(testGame.turnHandler()).toEqual(1);
      expect(testGame.get("activePlayer").get("name")).toEqual("JESSICA");
      expect(testGame.turnHandler()).toEqual(2);
      expect(testGame.turnHandler()).toEqual(3);
    });
  });


  describe('scoreKeeper', function() {
    it('should increment scorecard when a player wins/player loses', function() {
      // currentBoard = [" ", " ", " ", " ", "O", "O", "X", "X", "X"];
      testGame.play(6);
      testGame.play(4);
      testGame.play(7);
      testGame.play(5);
      testGame.play(8);
      expect(testGame.player1.get("scorecard").win).toEqual(1);
      expect(testGame.player1.get("scorecard").lose).toEqual(0);
      expect(testGame.player2.get("scorecard").lose).toEqual(1);
      expect(testGame.player2.get("scorecard").win).toEqual(0);
    });

    it('should increment scorecards when game ends in draw', function() {
      // currentBoard = ["X", "X", "O", "O", "O", "X", "X", "O", "X"]
      testGame.play(0);
      testGame.play(2);
      testGame.play(1);
      testGame.play(3);
      testGame.play(5);
      testGame.play(4);
      testGame.play(6);
      testGame.play(7);
      testGame.play(8);
      expect(testGame.player1.get("scorecard").draw).toEqual(1);
      expect(testGame.player2.get("scorecard").draw).toEqual(1);
      expect(testGame.player1.get("scorecard").draw).not.toEqual(0);
      expect(testGame.player2.get("scorecard").draw).not.toEqual(0);
    });
  });


  describe('newGame', function() {
    it('should restart a new game with a clean board', function() {
      testGame.play(6);
      testGame.play(4);
      testGame.play(7);
      testGame.play(5);
      expect(testGame.play(8)).toEqual([" ", " ", " ", " ", "O", "O", "X", "X", "X"]);
      testGame.newGame();
      expect(testGame.play(1)).toEqual([" ", "X", " ", " ", " ", " ", " ", " ", " "]);
      expect(testGame.turnHandler()).toEqual(2);
    });
  });

});
