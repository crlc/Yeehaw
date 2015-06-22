Yeehaw.Views.ReplyShow = Backbone.View.extend({
  template: JST['replies/show'],
  className: 'yeehaw row',

  events:{
    'click .del': 'destroyReply',
    'click .upvote': 'upvote',
    'click .downvote': 'downvote',
    'click .upvoted': 'unupvote',
    'click .downvoted': 'undownvote'
  },

  destroyReply: function (event) {
    event.preventDefault();
    this.model.destroy();
    this.remove();
  },

  upvote: function () {
    var reply = this.model;
    var newVote = new Yeehaw.Models.Vote({ reply_id: reply.id, path: '/like' });
    var vote = 1;
    if (reply.get('up_voted') === false) {
      vote += 1;
    }
    reply.set('up_voted', true);
    reply.set('vote_count', reply.get('vote_count') + vote);
    this.render();
    this.$('.downvoted').removeClass('downvoted').addClass('downvote');
    this.$('.upvote').removeClass('upvote').addClass('upvoted');
    newVote.save();
  },

  downvote: function () {
    var reply = this.model;
    var newVote = new Yeehaw.Models.Vote({ reply_id: reply.id, path: '/dislike' });
    var vote = 1;
    if (reply.get('up_voted') === true) {
      vote += 1;
    }
    reply.set('up_voted', false);
    reply.set('vote_count', reply.get('vote_count') - vote);
    this.render();
    this.$('.upvoted').removeClass('upvoted').addClass('upvote');
    this.$('.downvote').removeClass('downvote').addClass('downvoted');
    newVote.save();
  },

  unupvote: function () {
    var reply = this.model;
    var newVote = new Yeehaw.Models.Vote({ reply_id: reply.id, path: '/unlike' });
    reply.set('up_voted', null);
    reply.set('vote_count', reply.get('vote_count') - 1);
    this.render();
    this.$('.upvoted').removeClass('upvoted').addClass('upvote');
    newVote.save();
  },

  undownvote: function () {
    var reply = this.model;
    var newVote = new Yeehaw.Models.Vote({ reply_id: reply.id, path: '/undislike' });
    reply.set('up_voted', null);
    reply.set('vote_count', reply.get('vote_count') + 1);
    this.render();
    this.$('.downvoted').removeClass('downvoted').addClass('downvote');
    newVote.save();
  },

  render: function () {
    var renderedContent = this.template({ reply: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
