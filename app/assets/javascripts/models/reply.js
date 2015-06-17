Yeehaw.Models.Reply = Backbone.Model.extend({
  urlRoot: '/api/replies',

  replies: function () {
    if (!this._replies){
      this._replies = new Yeehaw.Collections.Replies([], { post: this });
    }
    return this._replies;
  },
});
