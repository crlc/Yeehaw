Yeehaw.Views.ReplyForm = Backbone.View.extend({
  template: JST['replies/form'],
  tagName: 'form',

  events:{
    'mousedown .new_reply': 'clearTextArea',
    'keyup textarea': 'renderPreview',
    'click button': 'createReply'
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.render);
  },

  clearTextArea: function (event) {
    this.$('.new_reply').empty();
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.renderPreview(this.$('textarea'));
    return this;
  },

  renderPreview: function () {
    var count = 200 - this.$('textarea').val().length;
    this.$('.preview').html(_.escape(count));
  },

  createReply: function (event) {
    event.preventDefault();
    var params = {
      body: this.$('textarea').val(),
      group_id: this.collection.post.get("group_id"),
      post_id: this.collection.post.id
    };

    this.collection.create(params, { wait: true });
    this.render();
  }
});
