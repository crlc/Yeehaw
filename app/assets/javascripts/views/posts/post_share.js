Yeehaw.Views.PostShare = Backbone.CompositeView.extend({
  template: JST['posts/share'],

  events: {
    'click .del': 'destroyPost',
    'click .back': 'back',
    'click .upvote': 'upvote',
    'click .downvote': 'downvote',
    'click .upvoted': 'unupvote',
    'click .downvoted': 'undownvote'
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.replyListView = new Yeehaw.Views.RepliesList({
      collection: this.model.replies()
    });
    this.addSubview('.post-replies', this.replyListView);
  },

  back: function () {
    Backbone.history.history.back();
  },

  destroyPost: function (event) {
    event.preventDefault();
    this.model.destroy();
    this.back();
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
    this.$('yeehaw .downvoted').toggleClass('downvoted downvote');
    this.$('yeehaw .upvote').toggleClass('upvote upvoted');
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
    this.$('yeehaw .upvoted').toggleClass('upvoted upvote');
    this.$('yeehaw .downvote').toggleClass('downvote downvoted');
    newVote.save();
  },

  unupvote: function () {
    var post = this.model;
    var newVote = new Yeehaw.Models.Vote({ post_id: post.id, path: '/unlike' });
    post.set('up_voted', null);
    post.set('vote_count', post.get('vote_count') - 1);
    this.render();
    this.$('yeehaw .upvoted').toggleClass('upvoted upvote');
    newVote.save();
  },

  undownvote: function () {
    var post = this.model;
    var newVote = new Yeehaw.Models.Vote({ post_id: post.id, path: '/undislike' });
    post.set('up_voted', null);
    post.set('vote_count', post.get('vote_count') + 1);
    this.render();
    this.$('yeehaw .downvoted').toggleClass('downvoted downvote');
    newVote.save();
  },

  render: function () {
    var renderedContent = this.template({ post: this.model });
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  }
});
