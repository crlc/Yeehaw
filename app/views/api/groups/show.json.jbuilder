json.extract! @group, :id, :title, :created_at, :updated_at

json.users @group.users do |user|
  json.id user.id
  json.username user.username
end

json.posts @group.posts do |post|
  json.extract! post, :id, :handle, :body, :created_at, :updated_at
  json.time_ago time_ago_in_words(post.created_at)
  json.reply_count post.replies.length
end
