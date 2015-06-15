Yeehaw.Views.GroupsIndexView = Backbone.View.extend({
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
      if (model.get("id") !== 1) {
        model.unfollow();
      }
    }.bind(this));
    this.model.follow();
    $(".glyphicon-check").slice(1).removeClass('glyphicon-check').addClass('glyphicon-unchecked');
    this.$(".glyphicon-unchecked").removeClass('glyphicon-unchecked').addClass('glyphicon-check');
  },

  unfollow: function () {
    if (this.model.id === 1) {return;}
    this.model.unfollow();
    this.$(".glyphicon-check").removeClass('glyphicon-check').addClass('glyphicon-unchecked');
  },

  render: function () {
    var renderedContent = this.template({
      group: this.model
    });
    this.$el.html(renderedContent);
    return this;
  }
});
