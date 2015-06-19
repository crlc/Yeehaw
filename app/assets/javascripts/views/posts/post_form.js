Yeehaw.Views.PostForm = Backbone.View.extend({
  template: JST['posts/form'],
  className: 'new-post',
  
  events: {
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
        Backbone.history.loadUrl();
      }.bind(this)
    });
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
});
