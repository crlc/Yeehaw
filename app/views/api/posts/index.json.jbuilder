json.array! @posts.each do |post|
  json.merge! post.attributes
  json.member? @followings.any? { |following| following.group_id == post.group_id }
  json.time_ago time_ago_in_words(post.created_at)
  json.reply_count post.replies.length
end
