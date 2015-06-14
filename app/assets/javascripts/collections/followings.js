Yeehaw.Collections.Followings = Backbone.Collection.extend({
  url:'/api/followings',
  model: Yeehaw.Models.Following,

  initialize: function (models, options) {
    this.group_id = options.group_id;
  }
});
