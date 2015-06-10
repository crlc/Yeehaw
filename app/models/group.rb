class Group < ActiveRecord::Base
  validates :title, presence: true, uniqueness: true

  has_many :posts
  has_many :followings
  has_many :users, through: :followings
end
