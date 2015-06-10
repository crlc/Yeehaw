class GroupsController < ApplicationController
  before_filter :require_signed_in!
  def new
    @group = Group.new
  end

  def show
    @group = Group.find(params[:id])
  end

  def edit
    @group = Group.find(params[:id])
  end

  def index
    @groups = Group.all
    @groups = @groups.select { |group| group.id == current_user.id }
  end

  def create
    @group = Group.new(group_params)
    if @group.save
      redirect_to posts_url
    else
      flash.now[:errors] = @group.errors.full_messages
      render :new
    end
  end

  def update
    @group = Group.find(params[:id])
    if @group.update(group_params)
      redirect_to posts_url
    else
      flash.now[:errors] = @group.errors.full_messages
      render :edit
    end
  end

  def destroy
    @group = Group.find(params[:id])
    @group.destroy
    redirect_to posts_url
  end

  private

  def group_params
    params.require(:group).permit(:title)
  end
end
