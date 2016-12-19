import Backbone from 'backbone';

const Player = Backbone.Model.extend({
  initialize: function(name, letter) {
  this.name = name.toUpperCase();
  this.letter = letter;

  this.scorecard = { "Win":0, "Lose": 0, "Draw": 0};
  }
});

module.exports = Player;
