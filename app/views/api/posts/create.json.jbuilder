json.merge! @post.attributes
json.member? true
json.time_ago time_ago_in_words(@post.created_at)
json.reply_count 0
json.up_voted nil
json.vote_count 0
