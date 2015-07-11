class Api::PostsController < ApplicationController
  def create
    @post = current_group.posts.new(post_params)
    @post.author_id = current_user.id

    if @post.save
      render json: @post
    else
      render json: @post.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render json: { message: 'deleted' }
  end

  def index
    @posts = current_user.posts.includes(:replies)
    @followings = current_user.followings
    render 'index'
  end

  def show
    @post = Post.includes(:replies).find(params[:id])
    render 'show'
  end

  def upvote
    @post = Post.find(params[:id])
    @post.liked_by current_user
    render 'show'
  end

  def downvote
    @post = Post.find(params[:id])
    @post.disliked_by current_user
    render 'show'
  end

  def unupvote
    @post = Post.find(params[:id])
    @post.unliked_by current_user
    render 'show'
  end

  def undownvote
    @post = Post.find(params[:id])
    @post.undisliked_by current_user
    render 'show'
  end

  private

  def current_group
    if params[:id]
      @post = Post.find(params[:id])
      @group = @post.group
    elsif params[:post]
      @group = Group.find(params[:post][:group_id])
    end
  end

  def post_params
    params.require(:post).permit(:handle, :body, :group_id)
  end
end
