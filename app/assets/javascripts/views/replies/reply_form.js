Yeehaw.Views.ReplyForm = Backbone.View.extend({
  template: JST['replies/form'],
  className: 'new-reply',

  events:{
    'mousedown input': 'clearTextArea',
    'keyup input': 'renderPreview',
    'click button': 'createReply'
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.render);
  },

  clearTextArea: function (event) {
    this.$('input').empty();
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.renderPreview(this.$('input'));
    return this;
  },

  renderPreview: function () {
    var count = 200 - this.$('input').val().length;
    this.$('.preview').html(_.escape(count));
  },

  createReply: function (event) {
    event.preventDefault();
    post = this.collection.post;
    var params = {
      body: this.$('input').val(),
      group_id: post.get("group_id"),
      post_id: post.id
    };
    if (!params.body) {return;}
    this.collection.create(params, { wait: true });
    post.set("reply_count", post.get("reply_count") + 1 );
    this.render();
  }
});
