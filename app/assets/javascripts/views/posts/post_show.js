Yeehaw.Views.PostShow = Backbone.CompositeView.extend({
  template: JST['posts/show'],

  events: {
    'click .del': 'destroyPost',
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.replies(), 'add', this.addReply);

    var newReply = new Yeehaw.Models.Reply({
      post_id: this.model.id
    });
    var formView = new Yeehaw.Views.ReplyForm({
      model: newReply,
      collection: this.model.replies()
    });

    this.addSubview('.replies-new', formView);
    this.model.replies().each( this.addReply.bind(this) );
  },

  addReply: function (reply) {
    var repliesShow = new Yeehaw.Views.ReplyShow({
      collection: this.model.replies(),
      model: reply
    });
    this.addSubview('.replies-div', repliesShow);
  },

  destroyPost: function (event) {
    event.preventDefault();
    this.model.destroy({
      success: function () {
        Backbone.history.navigate('', { trigger: true });
      }
    });
    this.remove();// hmmmm
  },

  removeReply: function (reply) {
    var subview = _.find(
      this.subviews('.replies'),
      function (subview) {
        return subview.model === reply;
      }
    );
    this.removeSubview('.replies', subview);
  },

  render: function () {
    var renderedContent = this.template({
      post: this.model,
      // replies: this.model.replies()
    });
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  }
});
