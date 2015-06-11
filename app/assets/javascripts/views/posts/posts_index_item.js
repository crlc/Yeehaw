Yeehaw.Views.PostsIndexItem = Backbone.View.extend({
  template: JST['posts/index_item'],
  tagName: 'li',

  initialize: function () {
    this.listenTo(this.model, 'add sync remove reset', this.render);
  },

  render: function () {
    var renderedContent = this.template({
      post: this.model
    });
    this.$el.html(renderedContent);
    return this;
  }
});
