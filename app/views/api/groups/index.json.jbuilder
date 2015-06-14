json.array! @groups do |group|
  json.extract! group, :id, :title, :created_at, :updated_at
  json.member? group.member?(current_user)

  group.followings.each do |following|
    if current_user.id == following.follower_id
      json.following_id following.id
      json.follower_id following.follower_id
      json.group_id group.id
    end
  end
end
