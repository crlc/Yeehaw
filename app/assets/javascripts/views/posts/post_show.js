Yeehaw.Views.PostShow = Backbone.CompositeView.extend({
  className: 'post-display',
  template: JST['posts/show'],

  events: {
    'click blockquote': 'showPost',
    'click .upvote': 'upvote',
    'click .downvote': 'downvote'
  },

  showPost: function () {
    this.modalView = this.modalView ||
      new Yeehaw.Views.PostModal({ model: this.model });
    $('body').prepend(this.modalView.render().$el);
    this.modalView.delegateEvents();
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
    var renderedContent = this.template({
      post: this.model
    });
    this.$el.html(renderedContent);
    return this;
  }
});
