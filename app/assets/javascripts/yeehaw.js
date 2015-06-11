window.Yeehaw = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function () {
    new Yeehaw.Routers.Router({
      $rootEl: $("#main")
    });
    Backbone.history.start();
  }
};
