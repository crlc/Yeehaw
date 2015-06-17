Yeehaw.Views.RepliesList = Backbone.CompositeView.extend({
  template: JST['replies/list'],

  initialize: function () {
    var group = this.collection.post.collection.group;
    if (group && group.get("member?")) {
      this.replyFormView = new Yeehaw.Views.ReplyForm({
        model: new Yeehaw.Models.Reply(),
        collection: this.collection
      });
      this.addSubview('.reply-list-form', this.replyFormView);
      this.collection.each(this.addReply.bind(this));
    }
    this.listenTo(this.collection, 'add', this.addReply);
  },

  addReply: function (reply) {
    var replyView = new Yeehaw.Views.ReplyShow({
      model: reply
    });
    this.addSubview('.reply-list-replies', replyView);
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  }
});
