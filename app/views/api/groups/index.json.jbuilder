json.array! @groups do |group|
  json.extract! group, :id, :title, :created_at, :updated_at
  json.member? @followings.any? { |following| following.group_id == group.id }

  @followings.each do |following|
    next unless following.group_id == group.id
    json.following_id following.id
    json.follower_id following.follower_id
    json.group_id group.id
  end
end
