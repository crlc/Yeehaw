json.array! @posts.each do |post|
  next if @replies.none? { |reply| reply.post_id == post.id }
  json.extract! post, :id, :handle, :author_id, :body, :created_at, :updated_at
  json.time_ago time_ago_in_words(post.created_at)
  json.reply_count @replies.select { |reply| reply.post_id == post.id }.length
end
