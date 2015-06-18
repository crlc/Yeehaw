# Schema Information

## groups
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null

## followings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, foreign key (references users)
group_id    | integer   | not null, foreign key (references groups)

## posts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | string    | not null
handle      | string    |
author_id   | integer   | not null, foreign key (references users)
group_id    | integer   | not null, foreign key (references groups)

## replies
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | string    |
author_id   | integer   | not null, foreign key (references users)
post_id     | integer   | not null, foreign key (references posts)

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null
password_digest | string    | not null
session_token   | string    | not null, unique
