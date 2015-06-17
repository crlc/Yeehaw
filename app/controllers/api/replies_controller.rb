class Api::RepliesController < ApplicationController
  def create
    @reply = Reply.new(reply_params)
    @reply.author_id = current_user.id

    if @reply.save
      render json: @reply
    else
      render json: @reply.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @reply = Reply.find(params[:id])
    @reply.destroy
    render json: { message: 'deleted' }
  end

  def index
    @posts = Post.all
    @replies = current_user.replies
    render 'index'
  end

  private

  def reply_params
    params.require(:reply).permit(:body, :post_id)
  end
end
