Yeehaw.Views.GroupForm = Backbone.View.extend({
  tagName: 'form',
  template: JST['groups/form'],
  events: {
    'click button': 'submit'
  },

  submit: function (event) {
    event.preventDefault();
    var attrs = this.$el.serializeJSON();
    var that = this;

    this.model.set(attrs);
    this.model.save({}, {
      success: function () {
        that.collection.add(that.model, { merge: true });
        Backbone.history.navigate('', { trigger: true });
      }
    });
  },

  render: function () {
    var renderedContent = this.template({
      group: this.model
    });
    this.$el.html(renderedContent);
    return this;
  }
});
