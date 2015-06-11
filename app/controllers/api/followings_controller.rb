class Api::FollowingsController < ApplicationController
  def create
    @following = Following.new(following_params)
    @following.follower_id = current_user.id
    @following.save
    render json: @following
  end

  def destroy
    @following = Following.find(params[:id])
    @following.destroy
    render json: {}
  end

  private

  def following_params
    params.require(:following).permit(:group_id)
  end
end
