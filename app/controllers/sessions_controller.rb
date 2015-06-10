class SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      sign_in(@user)
      redirect_to posts_url
    else
      flash.now[:errors] = ['Invalid Username or Password']
      render :new
    end
  end

  def destroy
    signout
    redirect_to new_session_url
  end
end
