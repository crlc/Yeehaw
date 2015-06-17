json.extract! @group, :id, :title, :created_at, :updated_at
json.member? @followings.any? { |following| following.group_id == @group.id }

herd = @followings.find { |following| following.group_id != 1 }
json.herd_id herd && herd.group_id

json.posts @group.posts do |post|
  json.extract! post, :id, :handle, :author_id, :body, :created_at, :updated_at
  json.time_ago time_ago_in_words(post.created_at)
  json.reply_count post.replies.length
end
