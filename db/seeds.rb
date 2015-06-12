# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

u1 = User.create(username: 'carlos', password: 'password')
u2 = User.create(username: 'will', password: 'password')
u3 = User.create(username: 'john', password: 'password')

g1 = Group.create(title: 'Nearby')
g2 = Group.create(title: 'San Francisco')
g3 = Group.create(title: 'Oakland')
g4 = Group.create(title: 'Berkeley')
g5 = Group.create(title: 'San Jose')

p1 = u1.posts.create(author_id: 1, body: 'We never really grow up. We only learn how to act in public.', handle: 'anon', group_id: 1)
p2 = u1.posts.create(author_id: 1, body: 'While in the shower: 2% washing, 7% singing, 91% winning fake arguments.', handle: 'Vanderbilt', group_id: 1)
p3 = u2.posts.create(author_id: 2, body: "It's been 'one of those days' for like, 3 years now.", handle: 'Princeton', group_id: 1)
p4 = u3.posts.create(author_id: 3, body: 'You never run out of toothpaste, just determination.', handle: '', group_id: 1)
p5 = u3.posts.create(author_id: 3, body: 'I hate when people use a thesaurus to spice up their language, it really urinates me off.', handle: 'Emerson College', group_id: 1)
p6 = u3.posts.create(author_id: 3, body: "Let's play a game called: How late can I wake up while still making it to class?", handle: '', group_id: 1)

r1 = p1.replies.create(body: 'feel the burn', author_id: 1)
r2 = p1.replies.create(body: 'if something is burnig go see the doc', author_id: 2)
r3 = p1.replies.create(body: 'true story', author_id: 3)
r4 = p1.replies.create(body: 'bummer', author_id: 2)
r5 = p2.replies.create(body: 'i do that sometimes', author_id: 2)
r6 = p2.replies.create(body: 'now I know you are on Yeehaw', author_id: 3)
r7 = p3.replies.create(body: 'HAHAHAHA', author_id: 1)
r8 = p3.replies.create(body: 'I can relate', author_id: '3')
r9 = p4.replies.create(body: 'Also known as the last mile', author_id: 1)
r10 = p4.replies.create(body: 'like my interenet connection', author_id: 3)
r11 = p5.replies.create(body: 'Radiate positive vibes', author_id: 1)

f1 = Following.create(group_id: 1, follower_id: 1)
f2 = Following.create(group_id: 1, follower_id: 2)
f3 = Following.create(group_id: 1, follower_id: 3)
