Yeehaw.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    '': 'postsIndex',
    'posts/new': 'newPost',
    'posts/:id': 'showPost',
    'groups/:id': 'showGroup'
  },

  postsIndex: function () {
    Yeehaw.Collections.posts.fetch();

    var indexView = new Yeehaw.Views.PostsIndex({
      collection: Yeehaw.Collections.posts
    });

    this._swapView(indexView);
  },

  newPost: function () {
    Yeehaw.Collections.groups.fetch({
      success: function () {
        var newPost = new Yeehaw.Models.Post();
        var newView = new Yeehaw.Views.PostForm({
          model: newPost,
          collection: Yeehaw.Collections.posts,
          groups: Yeehaw.Collections.groups
        });

        this._swapView(newView);
      }.bind(this)
    });
  },

  showPost: function (id) {
    var post = Yeehaw.Collections.posts.getOrFetch(id);
    var showView = new Yeehaw.Views.PostShow({
      model: post
    });

    this._swapView(showView);
  },

  showGroup: function (id) {
    Yeehaw.Collections.posts.fetch();

    var group = Yeehaw.Collections.groups.getOrFetch(id);
    var formView = new Yeehaw.Views.GroupShow({
      model: group,
      collection: Yeehaw.Collections.posts
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
