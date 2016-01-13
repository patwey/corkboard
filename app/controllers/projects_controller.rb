class ProjectsController < ApplicationController
  def index
  end

  def show
    @repo_name = params[:project_name]
  end
end
