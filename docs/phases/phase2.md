# Phase 2: Viewing Groups and Posts

## Rails
### Models

### Controllers
Api::GroupsController (create, destroy, index, show)
Api::PostsController (create, destroy, show, update)

### Views
* groups/show.json.jbuilder

## Backbone
### Models
* Group (parses nested `posts` association)
* Post

### Collections
* Groups
* Posts

### Views
* GroupForm
* GroupShow (composite view, contains PostsIndex subview)
* PostsIndex (composite view, contains PostsIndexItem subviews)
* PostsIndexItem
* PostShow

## Gems/Libraries
