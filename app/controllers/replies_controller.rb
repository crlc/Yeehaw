class RepliesController < ApplicationController
  def create
    @reply = Reply.new(reply_params)
    @reply.author_id = current_user.id
    @reply.save
    flash[:errors] = @reply.errors.full_messages
    post_id = params[:reply][:post_id]
    redirect_to post_url(post_id)
  end

  def destroy
    @reply = Reply.find(params[:id])
    @reply.destroy
    redirect_to post_url(@reply.post_id)
  end

  def new
  end

  private

  def reply_params
    params.require(:reply).permit(:body, :post_id)
  end
end
