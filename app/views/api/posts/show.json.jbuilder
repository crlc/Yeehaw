json.merge! @post.attributes
json.time_ago time_ago_in_words(@post.created_at)
json.up_voted current_user.voted_as_when_voted_for(@post)
json.vote_count @post.get_upvotes.size - @post.get_downvotes.size

json.replies @post.replies do |reply|
  json.merge! reply.attributes
  json.time_ago time_ago_in_words(reply.created_at)
  json.up_voted current_user.voted_as_when_voted_for(reply)
  json.vote_count reply.get_upvotes.size - reply.get_downvotes.size
end
