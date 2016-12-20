import $ from 'jquery';
import Backbone from 'backbone';
import SpaceView from 'app/views/space_view';

const BoardView = Backbone.View.extend({
  initialize: function() {
    this.render();
    this.listenTo(this.model, 'update', this.render);
  },

  render: function() {
    const board = this.$el;
    this.model.get("currentBoard").forEach(function(input) {
      const space = new SpaceView({
        letter: input
      });
      board.append(space.render().$el);
    });
  }
})

export default BoardView;
