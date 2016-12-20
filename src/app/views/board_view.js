import Backbone from 'backbone';
import SpaceView from 'app/views/space_view';

const BoardView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, 'update', this.render);
  },

  render: function() new Promise(function(resolve, reject) {
    
  });
})
