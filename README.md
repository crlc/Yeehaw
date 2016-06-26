# Yeehaw

[Website link][domain]

[domain]: http://yeehaw.herokuapp.com

## Minimum Viable Product
Yeehaw duplicates the Yik Yak functionality as a web application built on Rails and Backbone. Users can:

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
I will add API routes to serve group and post data as JSON, then add Backbone models and collections that fetch data from those routes. Users will be able to create and delete posts/replies and view both groups and posts, inside a single Backbone app.

[Details][phase-two]

### Phase 3: Joining Groups and Viewing Conversations (~2 days)
I will add the ability to join or leave a group. I will also add avatars to enable conversations within each post while keeping the users anonymous. Users will have access to a view with all their authored posts and a view with all the posts they replied to.

[Details][phase-three]

### Phase 4: Voting (~2 days)
I'll add voting to posts and replies. On the Backbone side, users will be able to upvote, downvote, and undo their votes.

[Details][phase-four]

### Phase 5: Odds and Ends (3+ days)
Focus on design and best UI practices. Implement various improvements to posts display, forms, layout, mobile, colors, etc.

[Details][phase-five]


### Bonus Features (TBD)
- [x] Sharing posts
- [x] CSS for mobile devices
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
