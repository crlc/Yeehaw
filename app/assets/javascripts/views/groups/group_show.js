Yeehaw.Views.GroupShow = Backbone.View.extend({
  template: JST['groups/show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var renderedContent = this.template({
      group: this.model,
      posts: this.collection
    });
    this.$el.html(renderedContent);
    return this;
  }
});
