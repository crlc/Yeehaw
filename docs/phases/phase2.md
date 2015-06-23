# Phase 2: Viewing Groups and Posts

## Rails
### Models

### Controllers
Api::GroupsController (create, destroy, index, show)
Api::PostsController (create, destroy, show)
Api::RepliesController (create, destroy, show)

### Views
* groups/index.json.jbuilder
* groups/show.json.jbuilder
* posts/show.json.jbuilder

## Backbone
### Models
* Group (parses nested `posts` association)
* Post
* Reply

### Collections
* Groups
* Posts
* Replies

### Views
* GroupShow (composite view, contains PostsIndex subview)
* GroupsIndex (composite view, contains GroupIndexView subview)
* GroupsIndexView
* PostsIndex (composite view, contains PostsShow subviews)
* PostsModal (composite view, contains PostsShow subviews)
* PostShow
* ReplyShow

## Gems/Libraries
