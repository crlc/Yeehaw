Yeehaw.Models.Downvote = Backbone.Model.extend({
  url: function () {
    return '/api/posts/' + this.get('post_id') + '/dislike';
  }
});
