class Post < ActiveRecord::Base
  validates :body, :author_id, :group_id, presence: true
  validates :body, length: { maximum: 200 }
  validates :handle, length: { maximum: 15 }

  belongs_to :author, class_name: 'User'
  belongs_to :group
  has_many :replies, dependent: :destroy
  acts_as_votable
end
