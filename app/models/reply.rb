class Reply < ApplicationRecord
  validates :body, :author_id, :post_id, presence: true
  validates :body, length: { maximum: 200 }

  belongs_to :author, class_name: 'User'
  belongs_to :posts, optional: true
  acts_as_votable
end
