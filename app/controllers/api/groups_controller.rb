class Api::GroupsController < ApplicationController
  def create
    @group = Group.new(group_params)

    if @group.save
      render json: @group
    else
      render json: @group.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @group = Group.find(params[:id])
    @group.destroy
    render json: {}
  end

  def index
    @groups = Group.all
    @followings = current_user.followings
    render 'index'
  end

  def show
    @group = Group.includes(posts: :replies).find(params[:id])
    @followings = current_user.followings
    render 'show'
  end

  private

  def group_params
    params.require(:group).permit(:title)
  end
end
