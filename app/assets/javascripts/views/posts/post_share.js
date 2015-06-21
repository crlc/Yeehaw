Yeehaw.Views.PostShare = Backbone.CompositeView.extend({
  template: JST['posts/share'],

  events: {
    'click .del': 'destroyPost'
  },

  initialize: function () {
    this.model.fetch();
    this.listenTo(this.model, 'sync', this.render);
    this.replyListView = new Yeehaw.Views.RepliesList({
      collection: this.model.replies()
    });
    this.addSubview('.post-replies', this.replyListView);
  },

  destroyPost: function (event) {
    event.preventDefault();
    this.model.destroy();
    this.remove();
  },

  render: function () {
    var renderedContent = this.template({ post: this.model });
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  }
});
