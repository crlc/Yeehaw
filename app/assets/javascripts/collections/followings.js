Yeehaw.Collections.Followings = Backbone.Collection.extend({
  url:'/api/followings',
  model: Yeehaw.Models.Following
});

Yeehaw.Collections.followings = new Yeehaw.Collections.Followings();
