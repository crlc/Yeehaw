Yeehaw.Views.ReplyShow = Backbone.View.extend({
  template: JST['replies/show'],

  events:{
    'click .destroy-reply': 'destroyReply',
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model, 'remove', this.render);
  },

  destroyReply: function (event) {
    event.preventDefault();
    this.model.destroy();
    this.remove();
  },

  render: function () {
    var renderedContent = this.template({
      reply: this.model
    });
    this.$el.html(renderedContent);
    return this;
  }
});
