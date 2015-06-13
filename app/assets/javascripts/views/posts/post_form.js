Yeehaw.Views.PostForm = Backbone.View.extend({
  template: JST['posts/form'],

  events: {
    'click .close': 'remove',
    'click .m-backdrop': 'remove',
    'submit form': 'createPost'
  },

  initialize: function (options) {
    this.groups = options.groups;
    this.listenTo(this.model, 'sync', this.render);
  },

  createPost: function (e) {
    e.preventDefault();
    this.model.set('body', this.$('textarea').val());
    this.model.set('handle', this.$('input').val());
    this.model.set('group_id', 1);
    this.model.save({}, {
      success: function () {
        this.collection.add(this.model);
        this.remove();
      }.bind(this)
    });
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
});
