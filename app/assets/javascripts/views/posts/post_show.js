Yeehaw.Views.PostShow = Backbone.CompositeView.extend({
  className: 'post-display',
  template: JST['posts/show'],

  events: {
    'click': 'showPost'
  },

  showPost: function () {
    this.modalView = this.modalView ||
      new Yeehaw.Views.PostModal({ model: this.model });
    $('body').prepend(this.modalView.render().$el);
    this.modalView.delegateEvents();
  },

  render: function () {
    var renderedContent = this.template({
      post: this.model
    });
    this.$el.html(renderedContent);
    return this;
  }
});
