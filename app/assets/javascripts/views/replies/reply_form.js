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
    var renderedContent = this.template({
      reply: this.model
    });
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
    this.model.set('body', this.$('textarea').val());
    this.model.set('group_id', this.collection.post.get("group_id"));
    this.model.set('post_id', this.collection.post.id);

    this.model.save({}, {
      success: function () {
        this.collection.add(this.model);
      }.bind(this)
    });
  }
});
