Yeehaw.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    '': 'showGroup',
    'groups/': 'indexGroup',
    'groups/:id': 'showGroup',
    'posts/': 'indexPosts',
    'posts/:id': 'showPost',
    'replies/': 'indexReplies'
  },

  indexGroup: function () {
    Yeehaw.Collections.groups.fetch();
    var indexView = new Yeehaw.Views.GroupsIndex({
      collection: Yeehaw.Collections.groups
    });
    this._swapView(indexView);
  },

  indexPosts: function () {
    var posts = new Yeehaw.Collections.Posts([], {});
    posts.fetch();
    var indexView = new Yeehaw.Views.PostsIndex({
      collection: posts
    });
    this._swapView(indexView);
  },

  indexReplies: function () {
    var replies = new Yeehaw.Collections.Posts([],{ url: '/api/replies'});
    replies.fetch();
    var indexView = new Yeehaw.Views.PostsIndex({
      collection: replies
    });
    this._swapView(indexView);
  },

  showGroup: function (id) {
    id = id || 1;
    var group = Yeehaw.Collections.groups.getOrFetch(id);
    var formView = new Yeehaw.Views.GroupShow({
      model: group
    });
    this._swapView(formView);
  },

  showPost: function (id) {
    var post = new Yeehaw.Models.Post({ id: id });
    post.fetch();
    // change from modal to regular show
    var formView = new Yeehaw.Views.PostModal({
      model: post
    });
    this._swapView(formView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.$el);
    view.render();
  }
});
