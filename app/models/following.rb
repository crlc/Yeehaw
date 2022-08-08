class Following < ApplicationRecord
  validates :group_id, :follower_id, presence: true

  belongs_to :group
  belongs_to :follower, class_name: 'User'
end
