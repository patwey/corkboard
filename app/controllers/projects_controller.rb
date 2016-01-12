class ProjectsController < ApplicationController
  def index
    @repos = current_user.repos
  end

  def show
  end
end
