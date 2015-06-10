class Group < ActiveRecord::Base
  validates :title, presence: true, uniqueness: true

  has_many :posts
  has_many :followings, dependent: :destroy
  has_many :users, through: :followings

  def member?(u)
    return true if u.id == self.user_id
    followings.where(user_id: u.id).exists?
  end
end
