Yeehaw.Views.GroupShow = Backbone.CompositeView.extend({
  template: JST['groups/show'],
  className: 'group-show',

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

  showPostForm: function () {
    $('.new-post').addClass('appear');
  },

  postForm: function () {
    $('.posts').addClass('np-form');
    $('.bar').addClass('np-form');
    var view = new Yeehaw.Views.PostForm({
      model: new Yeehaw.Models.Post(),
      collection: this.collection
    });
    this.$el.append(view.render().$el);
  },

  render: function () {
    var renderedContent = this.template({
      group: this.model
    });
    this.$el.html(renderedContent);
    this.collection.each( this.addPost.bind(this) );
    if (this.model.get("member?")) {
      this.postForm();
      $('a.compose').on('click', this.showPostForm);
    }
    return this;
  }
});
