import $ from 'jquery';
import Game from 'app/models/game';
import GameView from 'app/views/game_view';

$(document).ready(function() {

var game = new Game("player 1", "player 2");

var gameView = new GameView({
  el: '#game',
  model: game
});

gameView.render();

});
