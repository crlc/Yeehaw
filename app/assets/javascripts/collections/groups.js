Yeehaw.Collections.Groups = Backbone.Collection.extend({
  model: Yeehaw.Models.Group,
  url: '/api/groups',

  getOrFetch: function (id) {
    var group = this.get(id);
    var groups = this;

    if (!group) {
      group = new Yeehaw.Models.Group({ id: id });
      group.fetch({
        success: function () {
          groups.add(group);
        }
      });
    } else {
      group.fetch();
    }
    return group;
  }
});

Yeehaw.Collections.groups = new Yeehaw.Collections.Groups();
