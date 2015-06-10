class CreateReplies < ActiveRecord::Migration
  def change
    create_table :replies do |t|
      t.integer :author_id, null: false
      t.integer :post_id, null: false
      t.string :body, null: false

      t.timestamps null: false
    end
    add_index :replies, :author_id
    add_index :replies, :post_id
  end
end
