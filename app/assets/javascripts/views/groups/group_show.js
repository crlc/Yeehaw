Yeehaw.Views.GroupShow = Backbone.CompositeView.extend({
  template: JST['groups/show'],

  events: {
    'click .btn-compose': 'openPostForm'
  },

  initialize: function () {
    this.collection = this.model.posts();
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addPost);
    this.listenTo(this.collection, 'add remove', this.render);
  },

  addPost: function (post) {
    var view = new Yeehaw.Views.PostShow({
      model: post
    });
    this.addSubview('.posts', view);
  },

  openPostForm: function () {
    var modal = new Yeehaw.Views.PostForm({
      model: new Yeehaw.Models.Post(),
      collection: this.collection
    });
    $('body').prepend(modal.render().$el);
  },

  render: function () {
    var renderedContent = this.template({
      group: this.model
    });
    this.$el.html(renderedContent);
    this.collection.each( this.addPost.bind(this) );
    return this;
  }
});
