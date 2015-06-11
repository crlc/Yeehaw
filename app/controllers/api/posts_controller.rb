class Api::PostsController < ApplicationController
  def create
    @post = Post.new(post_params)
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
    @posts = Post.all
    render json: @posts
  end

  def show
    @post = Post.find(params[:id])
    render json: @post
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
