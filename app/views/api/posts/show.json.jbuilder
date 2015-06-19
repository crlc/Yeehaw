json.merge! @post.attributes
json.time_ago time_ago_in_words(@post.created_at)
json.member? @followings.any? { |following| following.group_id == @post.group_id }

json.replies @post.replies do |reply|
  json.merge! reply.attributes
  json.time_ago time_ago_in_words(reply.created_at)
end
