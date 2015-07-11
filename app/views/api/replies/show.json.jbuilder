json.merge! @reply.attributes
json.time_ago time_ago_in_words(@reply.created_at)
json.up_voted current_user.voted_as_when_voted_for(@reply)
json.vote_count @reply.get_upvotes.size - @reply.get_downvotes.size
