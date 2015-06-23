# Yeehaw

[Website link][domain]

[domain]: http://yeehawapp.me

## Minimum Viable Product
Yeehaw is a clone of Yik Yak built on Rails and Backbone. Users can:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [x] Create accounts
- [x] Create sessions (log in)
- [x] Create posts
- [x] Create post replies
- [x] View posts and replies
- [x] Subscribe to a single group
- [x] Leave group
- [x] View a feed of subscribed or `nearby` groups
- [x] View posts from other groups
- [x] Avatars for conversations
- [x] "Upvote/downvote" buttons for posts and replies

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Groups, Posts, and Replies Creation (~1 day)
I will implement user authentication in Rails. Users will be able to create posts and replies using a simple text form in a Rails view. At the end of this phase the app will be pushed to Heroku.

[Details][phase-one]

### Phase 2: Viewing Groups and Posts (~2 days)
I will add API routes to serve group and post data as JSON, then add Backbone models and collections that fetch data from those routes. Users will be able to create posts/replies and view both groups and posts, inside a single Backbone app.

[Details][phase-two]

### Phase 3: Editing Posts and Groups (~2 days)
I'll add functionality to the `PostForm` and `PostShow` to edit posts within a minute of creating them. I will also add the ability to join or leave a group. I will also add avatars to enable conversations within each post while keeping the users anonymous.

[Details][phase-three]

### Phase 4: User Feeds (~1-2 days)
I'll start by adding a `feed` route that uses the `current_user`'s `subscribed_groups` association to serve a list of posts ordered chronologically. On the Backbone side, I'll make a `FeedShow` view whose `posts` collection fetches from the new route.  Ultimately, this will be the page users see after logging in.

[Details][phase-four]

### Phase 5: Searching for Groups and Posts (~2 days)
I'll need to add `search` routes to both the Groups and Posts controllers. On the Backbone side, there will be a `SearchResults` composite view having `GroupsIndex` and `PostsIndex` subviews. These views will use plain old `groups` and `posts` collections, but they will fetch from the new `search` routes.

[Details][phase-five]


### Bonus Features (TBD)
- [x] Sharing posts
- [ ] Pagination/infinite scroll
- [ ] Typeahead search bar
- [ ] Sort posts by new or popularity
- [ ] User karma
- [ ] Search for groups by name
- [ ] Post types (image posts, etc)
- [ ] Multiple sessions/session management

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
