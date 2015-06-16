Yeehaw.Views.PostModal = Backbone.CompositeView.extend({
  template: JST['posts/modal'],

  events: {
    'click .del': 'destroyPost',
    'click .close': 'dismiss',
    'click .m-backdrop' : 'dismiss'
  },

  initialize: function () {
    this.model.fetch();
    this.listenTo(this.model, 'sync', this.render);
    this.replyListView = new Yeehaw.Views.RepliesList({
      collection: this.model.replies()
    });

    this.addSubview('.post-modal-replies', this.replyListView);
  },

  destroyPost: function (event) {
    event.preventDefault();
    this.model.destroy();
    this.remove();
  },

  dismiss: function (event) {
    event.preventDefault();
    this.remove();
    Backbone.history.loadUrl();
  },

  render: function () {
    var renderedContent = this.template({ post: this.model });
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  }
});
