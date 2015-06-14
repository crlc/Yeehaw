Yeehaw.Models.Group = Backbone.Model.extend({
  urlRoot: '/api/groups',

  posts: function () {
    if (!this._posts) {
      this._posts = new Yeehaw.Collections.Posts([], { group: this });
    }
    return this._posts;
  },

  following: function () {
    if (!this._following) {
      this._following = new Yeehaw.Models.Following([], { group_id: this.id });
    }
    return this._following;
  },

  follow: function () {
    var that = this;
    this.following().save({ group_id: this.id });
  },

  unfollow: function () {
    var that = this;
    this.following().destroy({
      success: function () {
        delete that._following;
      }
    });
  },

  parse: function (response) {
    if (response.posts) {
      this.posts().set(response.posts, { parse: true });
      delete response.posts;
    }
    if (response.group_id) {
      this.following().set({id: response.following_id});
      delete response.group_id;
    }

    return response;
  }
});
