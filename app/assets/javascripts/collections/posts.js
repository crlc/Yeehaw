Yeehaw.Collections.Posts = Backbone.Collection.extend({
  model: Yeehaw.Models.Post,
  url: '/api/posts',

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

Yeehaw.Collections.posts = new Yeehaw.Collections.Posts();
