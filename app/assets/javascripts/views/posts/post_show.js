Yeehaw.Views.PostShow = Backbone.CompositeView.extend({
  template: JST['posts/show'],

  events: {
    'click .del': 'destroyPost',
  },

  className: 'post-display',

  initialize: function () {
    this.collection = this.model.replies();
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addReply);
  },

  addReply: function (reply) {
    var repliesShow = new Yeehaw.Views.ReplyShow({
      model: reply,
      collection: this.collection
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
    this.remove();
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
      post: this.model
    });
    this.$el.html(renderedContent);
    this.renderReply();
    this.renderReplyForm();
    return this;
  },

  renderReply: function () {
    this.model.replies().each( this.addReply.bind(this) );
  },

  renderReplyForm: function () {
    var newReply = new Yeehaw.Models.Reply({ post_id: this.model.id });
    var formView = new Yeehaw.Views.ReplyForm({
      model: newReply,
      collection: this.collection
    });

    this.addSubview('.replies-new', formView);
  }
});
