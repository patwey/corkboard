class UsersController < ApplicationController
  respond_to :json

  def current
    respond_with current_user if current_user
  end
end
