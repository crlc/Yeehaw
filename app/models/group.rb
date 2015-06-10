class Group < ActiveRecord::Base
  validates :title, presence: true, uniqueness: true

  has_many :posts
  has_many :followings, dependent: :destroy
  has_many :users, through: :followings, source: :follower

  def member?(u)
    followings.where(follower_id: u.id).exists?
  end
end
