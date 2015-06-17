Yeehaw.Views.PostsIndex = Backbone.CompositeView.extend({
  template: JST['posts/index'],

  initialize: function () {
    this.listenTo(this.collection, 'add', this.addPost);
    this.listenTo(this.collection, 'synce add remove', this.render);
  },

  addPost: function (post) {
    var view = new Yeehaw.Views.PostShow({
      model: post
    });
    this.addSubview('.posts', view);
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.collection.each( this.addPost.bind(this) );
    return this;
  }
});
