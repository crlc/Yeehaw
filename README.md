# Yeehaw

[Heroku link][heroku]

[heroku]: http://yeehaw.herokuapp.com

## Minimum Viable Product
Yeehaw is a clone of Yik Yak built on Rails and Backbone. Users can:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [x] Create accounts
- [x] Create sessions (log in)
- [x] Create posts
- [ ] Create post replies
- [ ] View posts and replies
- [ ] Subscribe to a group
- [ ] Leave group
- [ ] View a feed of subscribed and `nearby` groups
- [ ] Search for groups by name

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Groups, Posts, and Replies Creation (~1 day)
I will implement user authentication in Rails. Users will be able to create groups, posts, and replies using a simple text form in a Rails view. At the end of this phase the app will be pushed to Heroku.

[Details][phase-one]

### Phase 2: Viewing Groups and Posts (~2 days)
I will add API routes to serve group and post data as JSON, then add Backbone models and collections that fetch data from those routes. Users will be able to create posts and view both groups and posts, inside a single Backbone app.

[Details][phase-two]

### Phase 3: Editing Posts and Groups (~2 days)
I'll add functionality to the `PostForm` and `PostShow` to edit posts. I will also add the ability to join or leave a group.

[Details][phase-three]

### Phase 4: User Feeds (~1-2 days)
I'll start by adding a `feed` route that uses the `current_user`'s `subscribed_groups` association to serve a list of posts ordered chronologically. On the Backbone side, I'll make a `FeedShow` view whose `posts` collection fetches from the new route.  Ultimately, this will be the page users see after logging in.

[Details][phase-four]

### Phase 5: Searching for Groups and Posts (~2 days)
I'll need to add `search` routes to both the Groups and Posts controllers. On the Backbone side, there will be a `SearchResults` composite view having `GroupsIndex` and `PostsIndex` subviews. These views will use plain old `groups` and `posts` collections, but they will fetch from the new `search` routes.

[Details][phase-five]


### Bonus Features (TBD)
- [ ] Pagination/infinite scroll
- [ ] Typeahead search bar
- [ ] "Upvote/downvote" buttons for posts and replies
- [ ] Sort posts by new or popularity
- [ ] User karma
- [ ] View posts from other groups
- [ ] Post types (image posts, etc)
- [ ] Sharing posts
- [ ] Multiple sessions/session management
- [ ] Change hosting from heroku to digital ocean

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
