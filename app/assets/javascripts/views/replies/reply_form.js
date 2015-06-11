Yeehaw.Views.ReplyForm = Backbone.View.extend({
  template: JST['replies/form'],
  tagName: 'form',
  events:{
    'click .save_reply': 'submit',
    'mousedown .new_reply': 'clearTextArea',
    'keyup textarea': 'renderPreview'
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
    return this;
  },

  renderPreview: function (event) {
    var content = $(event.currentTarget).val();
    this.$('.preview').html(_.escape(content));
  },

  submit: function (event) {
    event.preventDefault();
    var attrs = this.$el.serializeJSON();
    var that = this;

    this.model.set(attrs);
    this.model.save({}, {
      success: function () {
        that.collection.add(that.model, { merge: true });
      }
    });
  }
});
