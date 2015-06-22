Yeehaw.Models.Upvote = Backbone.Model.extend({
  url: function () {
    return '/api/posts/' + this.get('post_id') + this.get('path');
  }
});
