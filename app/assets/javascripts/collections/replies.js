Yeehaw.Collections.Replies = Backbone.Collection.extend({
  model: Yeehaw.Models.Reply,
  url: '/api/replies',
  
  initialize: function (models, options) {
    this.post = options.post;
  }
});
