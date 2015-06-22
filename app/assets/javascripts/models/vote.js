Yeehaw.Models.Vote = Backbone.Model.extend({
  url: function () {
    if (this.get('post_id')) {
      return '/api/posts/' + this.get('post_id') + this.get('path');
    } else {
      return '/api/replies/' + this.get('reply_id') + this.get('path');
    }
  }
});
