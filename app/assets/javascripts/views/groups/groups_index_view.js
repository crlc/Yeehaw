Yeehaw.Views.GroupsIndexView = Backbone.View.extend({
  className: 'list-group-item',
  template: JST['groups/indexgroup'],

  events: {
    'click .glyphicon-unchecked': 'follow',
    'click .glyphicon-check': 'unfollow',
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  follow: function (event) {
    event.preventDefault();
    this.model.collection.each(function (model) {
      if (model.get('id') !== 1) {
        model.unfollow();
      }
    });
    this.model.follow();
    $('.glyphicon-check').slice(1).toggleClass('glyphicon-check glyphicon-unchecked');
    this.$('.glyphicon-unchecked').toggleClass('glyphicon-unchecked glyphicon-check');
  },

  unfollow: function () {
    if (this.model.id === 1) {return;}
    this.model.unfollow();
    this.$('.glyphicon-check').toggleClass('glyphicon-check glyphicon-unchecked');
  },

  render: function () {
    var renderedContent = this.template({
      group: this.model
    });
    this.$el.html(renderedContent);
    return this;
  }
});
