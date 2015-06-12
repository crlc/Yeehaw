Yeehaw.Views.GroupShow = Backbone.View.extend({
  template: JST['groups/show'],

  initialize: function () {
    // this.collection = this.model.posts();
    this.listenTo(this.model, 'sync', this.render);
    // this.listenTo(this.collection, 'add', this.addPost);
  },
  //
  // addPost: function (post) {
  //   var view = new Yeehaw.Views.PostShow({
  //     model: post
  //   });
  //   this.addSubview('#posts', view);
  // },

  render: function () {
    var renderedContent = this.template({
      group: this.model,
      posts: this.collection
    });
    this.$el.html(renderedContent);
    // this.renderPosts();
    return this;
  },
  //
  // renderPosts: function () {
  //   this.model.posts().each( this.addPost.bind(this) );
  // },
  //
  // renderPostForm: function () {
  //   var view = new Yeehaw.Views.PostForm({
  //     collection: this.collection
  //   });
  //
  //   this.addSubview('#post-form', view);
  // }
});
