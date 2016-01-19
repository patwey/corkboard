class UsersController < ApplicationController
  respond_to :json

  def current
    if current_user
      respond_with current_user
    end
  end
end
