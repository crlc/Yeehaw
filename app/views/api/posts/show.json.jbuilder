json.extract! @post, :id, :handle, :body, :created_at, :updated_at
json.replies @post.replies do |reply|
  json.extract! reply, :id, :post_id, :body, :created_at, :updated_at
end
