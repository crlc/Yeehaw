# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150621194235) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "followings", force: :cascade do |t|
    t.integer  "follower_id", null: false
    t.integer  "group_id",    null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "followings", ["follower_id"], name: "index_followings_on_follower_id", using: :btree
  add_index "followings", ["group_id"], name: "index_followings_on_group_id", using: :btree

  create_table "groups", force: :cascade do |t|
    t.string   "title",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "posts", force: :cascade do |t|
    t.integer  "author_id",  null: false
    t.integer  "group_id",   null: false
    t.string   "body",       null: false
    t.string   "handle"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "posts", ["author_id"], name: "index_posts_on_author_id", using: :btree
  add_index "posts", ["group_id"], name: "index_posts_on_group_id", using: :btree

  create_table "replies", force: :cascade do |t|
    t.integer  "author_id",  null: false
    t.integer  "post_id",    null: false
    t.string   "body",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "replies", ["author_id"], name: "index_replies_on_author_id", using: :btree
  add_index "replies", ["post_id"], name: "index_replies_on_post_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "votes", force: :cascade do |t|
    t.integer  "votable_id"
    t.string   "votable_type"
    t.integer  "voter_id"
    t.string   "voter_type"
    t.boolean  "vote_flag"
    t.string   "vote_scope"
    t.integer  "vote_weight"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "votes", ["votable_id", "votable_type", "vote_scope"], name: "index_votes_on_votable_id_and_votable_type_and_vote_scope", using: :btree
  add_index "votes", ["voter_id", "voter_type", "vote_scope"], name: "index_votes_on_voter_id_and_voter_type_and_vote_scope", using: :btree

end
