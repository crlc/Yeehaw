Yeehaw.Views.PostsIndex = Backbone.CompositeView.extend({
  template: JST['posts/index'],

  initialize: function () {
    this.listenTo(this.collection, 'add change:name remove reset', this.render);
    this.listenTo(this.collection, 'add', this.addToList);
  },

  addToList: function (post) {
    var postView = new Yeehaw.Views.PostsIndexItem({
      model: post
    });
    this.$('.posts').append(postView.$el);
  },

  render: function () {
    var renderedContent = this.template({
      posts: this.collection
    });
    this.$el.html(renderedContent);

    this.collection.each(function (post) {
      var indexItem = new Yeehaw.Views.PostsIndexItem({
        model: post
      });
      this.$('ul').append(indexItem.render().$el);
    }.bind(this));
    return this;
  }
});
