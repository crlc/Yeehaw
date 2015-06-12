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
      this._following = new Yeehaw.Models.Following({ group_id: this.id });
    }
    return this._following;
  },

  follow: function () {
    var that = this;
    this.following().save({ group_id: this.id }, {
      success: function ( model, response, options ) {
        Yeehaw.Collections.followings.add( model, { merge: true });
        that._following = model;
      }
    });
  },

  unfollow: function () {
    var that = this;
    this.following().destroy({
      success: function () {
        delete that._following;
        Yeehaw.Collections.followings.remove(that);
      }
    });
  },

  parse: function (response) {
    if (response.posts) {
      this.posts().set(response.posts, { parse: true });
      delete response.posts;
    }

    return response;
  }
});
