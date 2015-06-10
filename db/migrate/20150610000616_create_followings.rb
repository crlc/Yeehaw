class CreateFollowings < ActiveRecord::Migration
  def change
    create_table :followings do |t|
      t.integer :follower_id, null: false
      t.integer :group_id, null: false

      t.timestamps null: false
    end
    add_index :followings, :follower_id
    add_index :followings, :group_id
  end
end
