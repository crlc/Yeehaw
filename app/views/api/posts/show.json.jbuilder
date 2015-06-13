json.extract! @post, :id, :handle, :body, :author_id, :created_at, :updated_at
json.time_ago time_ago_in_words(@post.created_at)

json.replies @post.replies do |reply|
  json.extract! reply, :id, :post_id, :body, :author_id, :created_at, :updated_at
  json.time_ago time_ago_in_words(reply.created_at)
end
