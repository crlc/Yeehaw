Yeehaw.Views.GroupsIndex = Backbone.CompositeView.extend({
  template: JST['groups/index'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addGroup);
  },

  addGroup: function(group){
    var view = new Yeehaw.Views.GroupsIndexView({
      model: group
    });
    this.addSubview('.groups', view);
  },

  render: function () {
    var renderedContent = this.template({
      groups: this.collection
    });
    this.$el.html(renderedContent);
    this.collection.each( this.addGroup.bind(this) );
    return this;
  }
});
