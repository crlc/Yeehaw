json.array! @posts.each do |post|
  json.extract! post, :id, :handle, :author_id, :body, :created_at, :updated_at
  json.time_ago time_ago_in_words(post.created_at)
  json.reply_count post.replies.length
end
