class Api::ApiController < ApplicationController
  before_action :require_signed_in!

  def require_group_member!
    redirect_to new_session_url unless current_group.member?(current_user)
  end

  def require_signed_in!
    return unless signed_in?
    render json: ['You must be signed in to perform that action!'],
           status: :unauthorized
  end
end
