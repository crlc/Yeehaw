class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.integer :author_id, null: false
      t.integer :group_id, null: false
      t.string :body, null: false
      t.string :handle

      t.timestamps null: false
    end
    add_index :posts, :author_id
    add_index :posts, :group_id
  end
end
