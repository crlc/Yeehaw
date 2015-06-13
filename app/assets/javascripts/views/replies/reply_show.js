Yeehaw.Views.ReplyShow = Backbone.View.extend({
  template: JST['replies/show'],
  tagName: 'li',

  events:{
    'click .del': 'destroyReply',
    // 'click .del': 'removeReply',
  },
  //
  // initialize: function () {
  //   this.listenTo(this.collection, 'remove', this.render);
  // },

  destroyReply: function (event) {
    event.preventDefault();
    this.model.destroy();
    this.remove();
  },
  //
  // removeReply: function (reply) {
  //   var subview = _.find(
  //     this.subviews('.reply-list-replies'),
  //     function (subview) {
  //       return subview.model === reply;
  //     }
  //   );
  //   this.removeSubview('.reply-list-replies', subview);
  // },

  render: function () {
    var renderedContent = this.template({ reply: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
