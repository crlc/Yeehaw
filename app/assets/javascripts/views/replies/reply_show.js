Yeehaw.Views.ReplyShow = Backbone.View.extend({
  template: JST['replies/show'],
  tagName: 'li',

  events:{
    'click .del': 'destroyReply',
  },

  destroyReply: function (event) {
    event.preventDefault();
    this.model.destroy();
    this.remove();
  },

  render: function () {
    var renderedContent = this.template({ reply: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
