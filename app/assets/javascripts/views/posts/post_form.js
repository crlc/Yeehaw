Yeehaw.Views.PostForm = Backbone.View.extend({
  template: JST['posts/form'],
  className: 'new-post',

  events: {
    'click .save_yeehaw': 'createPost',
    'click span': 'toggleHandle'
  },

  initialize: function (options) {
    this.groups = options.groups;
    this.listenTo(this.model, 'sync', this.render);
  },

  createPost: function (e) {
    e.preventDefault();
    var attrs = this.$('form').serializeJSON();
    if (!attrs.body) { return; }
    this.model.set(attrs);
    this.model.set('group_id', this.collection.group.id);
    this.model.save({}, {
      success: function () {
        this.collection.add(this.model);
      }.bind(this)
    });
  },

  toggleHandle: function () {
    if (this.$('.hide').length) {
      this.$('.hide').removeClass('hide').addClass('display');
      this.$('span').toggleClass('glyphicon-resize-full glyphicon-resize-small');
    } else {
      this.$('.display').removeClass('display').addClass('hide');
      this.$('span').toggleClass('glyphicon-resize-small glyphicon-resize-full');
    }
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
});
