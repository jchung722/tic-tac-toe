import $ from 'jquery';
import Backbone from 'backbone';
import SpaceView from 'app/views/space_view';

const BoardView = Backbone.View.extend({
  initialize: function() {
    this.currentBoard = this.model.get("currentBoard");
  },

  render: function() {
    console.log(this.model.get("currentBoard"));
    const board = this.$el;
    var self = this;
    var moveSpace = 0;
    board.empty();
    this.currentBoard.forEach(function(input) {
      const space = new SpaceView({
        model: self.model,
        move: moveSpace,
        letter: input
      });
      moveSpace += 1;
      this.listenTo(space, 'updateBoard', this.render);
      board.append(space.render().$el);
    }, this);
  },

})

export default BoardView;
