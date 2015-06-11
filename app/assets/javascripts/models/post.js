Yeehaw.Models.Post = Backbone.Model.extend({
  urlRoot: '/api/posts',

  replies: function () {
    if (!this._replies){
      this._replies = new Yeehaw.Collections.Replies([], { post: this });
    }
    return this._replies;
  },

  parse: function(response){
    this.replies().set(response.replies);
    delete(response.replies);
    return response;
  }
});
