import Backbone from 'backbone';

const Player = Backbone.Model.extend({
  initialize: function(name, letter) {
  this.set("name", name.toUpperCase());
  this.set("letter", letter);
  this.set("scorecard", { win:0, lose: 0, draw: 0});
  }
});

module.exports = Player;
