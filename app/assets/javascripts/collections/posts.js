Yeehaw.Collections.Posts = Backbone.Collection.extend({
  model: Yeehaw.Models.Post,
  url: '/api/posts',

  comparator: function (post) {
    return -(new Date(post.get('created_at')));
  },

  initialize: function (models, options) {
    this.group = options.group;
  },

  getOrFetch: function (id) {
    var post = this.get(id);
    var posts = this;

    if (!post) {
      post = new Yeehaw.Models.Post({ id: id });
      post.fetch({
        success: function () {
          posts.add(post);
        }
      });
    } else {
      post.fetch();
    }
    return post;
  }
});
