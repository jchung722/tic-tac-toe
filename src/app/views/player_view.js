import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

const PlayerView = Backbone.View.extend({
  initialize: function(options){
    this.playerTemplate = _.template($('#tmpl-player-details').html());
  },

  render: function(){
    var html = this.playerTemplate(this.model.attributes);
    this.$el.html(html);
    return this;
  }

});

export default PlayerView;
