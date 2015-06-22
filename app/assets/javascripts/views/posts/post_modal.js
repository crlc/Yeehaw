Yeehaw.Views.PostModal = Backbone.CompositeView.extend({
  template: JST['posts/modal'],

  events: {
    'click .del': 'destroyPost',
    'click .close': 'dismiss',
    'click .m-backdrop' : 'dismiss',
    'click .upvote': 'upvote',
    'click .downvote': 'downvote',
    'click a' : 'share'
  },

  initialize: function () {
    this.model.fetch();
    this.listenTo(this.model, 'sync', this.render);
    this.replyListView = new Yeehaw.Views.RepliesList({
      collection: this.model.replies()
    });

    this.addSubview('.post-modal-replies', this.replyListView);
  },

  destroyPost: function (event) {
    event.preventDefault();
    this.model.destroy();
    this.remove();
  },

  dismiss: function (event) {
    event.preventDefault();
    this.remove();
    Backbone.history.loadUrl();
  },

  share: function (event) {
    this.remove();
  },

  upvote: function () {
    var post = this.model;
    var newVote = new Yeehaw.Models.Upvote({ post_id: post.id });
    var vote = 1;
    if (post.get('up_voted') === false) {
      vote += 1;
    }
    post.set('up_voted', true);
    post.set('vote_count', post.get('vote_count') + vote);
    this.render();
    this.$('.downvoted').removeClass('downvoted').addClass('downvote');
    this.$('.upvote').removeClass('upvote').addClass('upvoted');
    newVote.save();
  },

  downvote: function () {
    var post = this.model;
    var newVote = new Yeehaw.Models.Downvote({ post_id: post.id });
    var vote = 1;
    if (post.get('up_voted') === true) {
      vote += 1;
    }
    post.set('up_voted', false);
    post.set('vote_count', post.get('vote_count') - vote);
    this.render();
    this.$('.upvoted').removeClass('upvoted').addClass('upvote');
    this.$('.downvote').removeClass('downvote').addClass('downvoted');
    newVote.save();
  },

  render: function () {
    var renderedContent = this.template({ post: this.model });
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  }
});
