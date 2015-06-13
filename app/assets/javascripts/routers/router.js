Yeehaw.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    '': 'showGroup',
    'groups/': 'indexGroup',
    'groups/:id': 'showGroup'
  },

  indexGroup: function () {
    Yeehaw.Collections.groups.fetch();
    var indexView = new Yeehaw.Views.GroupsIndex({
      collection: Yeehaw.Collections.groups
    });
    this._swapView(indexView);
  },

  showGroup: function (id) {
    id = id || 1;
    var group = Yeehaw.Collections.groups.getOrFetch(id);
    var formView = new Yeehaw.Views.GroupShow({
      model: group
    });
    this._swapView(formView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.$el);
    view.render();
  }
});
