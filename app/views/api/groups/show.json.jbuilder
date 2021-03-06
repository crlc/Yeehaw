json.extract! @group, :id, :title, :created_at, :updated_at
member = @followings.any? { |following| following.group_id == @group.id }
json.member? member

herd = @followings.find { |following| following.group_id != 1 }
json.herd_id herd && herd.group_id

json.posts @group.posts do |post|
  json.merge! post.attributes
  json.member? member
  json.time_ago time_ago_in_words(post.created_at)
  json.reply_count post.replies.length
  json.up_voted current_user.voted_as_when_voted_for(post)
  json.vote_count post.get_upvotes.size - post.get_downvotes.size
end
