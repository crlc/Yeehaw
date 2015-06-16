Yeehaw.Views.PostForm = Backbone.View.extend({
  template: JST['posts/form'],

  events: {
    'click .close': 'remove',
    'click .m-backdrop': 'remove',
    'click button': 'createPost'
  },

  initialize: function (options) {
    this.groups = options.groups;
    this.listenTo(this.model, 'sync', this.render);
  },

  createPost: function (e) {
    e.preventDefault();
    var attrs = this.$('form').serializeJSON();
    this.model.set(attrs);
    this.model.set('group_id', this.collection.group.id);
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
