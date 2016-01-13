class UsersController < ApplicationController
  def current
    render json: { name:     current_user.name,
                   username: current_user.username }
  end
end
