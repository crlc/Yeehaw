Yeehaw.Views.PostShow = Backbone.CompositeView.extend({
  className: 'yeehaw row',
  template: JST['posts/show'],

  events: {
    'click .yeehaw-meta': 'showPost',
    'click .upvote': 'upvote',
    'click .downvote': 'downvote',
    'click .upvoted': 'unupvote',
    'click .downvoted': 'undownvote'
  },

  showPost: function () {
    this.modalView = this.modalView ||
      new Yeehaw.Views.PostModal({ model: this.model });
    $('body').prepend(this.modalView.render().$el);
    this.modalView.delegateEvents();
  },

  upvote: function () {
    var post = this.model;
    var newVote = new Yeehaw.Models.Vote({ post_id: post.id, path: '/like' });
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
    var newVote = new Yeehaw.Models.Vote({ post_id: post.id, path: '/dislike' });
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

  unupvote: function () {
    var post = this.model;
    var newVote = new Yeehaw.Models.Vote({ post_id: post.id, path: '/unlike' });
    post.set('up_voted', null);
    post.set('vote_count', post.get('vote_count') - 1);
    this.render();
    this.$('.upvoted').removeClass('upvoted').addClass('upvote');
    newVote.save();
  },

  undownvote: function () {
    var post = this.model;
    var newVote = new Yeehaw.Models.Vote({ post_id: post.id, path: '/undislike' });
    post.set('up_voted', null);
    post.set('vote_count', post.get('vote_count') + 1);
    this.render();
    this.$('.downvoted').removeClass('downvoted').addClass('downvote');
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
