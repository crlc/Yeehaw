Yeehaw.Views.GroupsIndex = Backbone.View.extend({
  template: JST['groups/index'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function () {
    var renderedContent = this.template({
      groups: this.collection
    });
    this.$el.html(renderedContent);
    return this;
  }
});
