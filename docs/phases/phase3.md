# Phase 3: Joining Groups and Viewing Conversations

## Rails
### Models
* Following

### Controllers
Api::FollowingsController (create, destroy)

### Views
* posts/index.json.jbuilder
* replies/index.json.jbuilder

## Backbone
### Models
* Following

### Collections
* Followings

### Views
* PostsShare (composite view, contains PostsShow subviews)
* RepliesList (composite view, contains ReplyShow subviews)
* PostForm
* ReplyForm

## Gems/Libraries
* Bootstrap
