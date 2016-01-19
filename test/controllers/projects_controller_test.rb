require 'test_helper'

class ProjectsControllerTest < ActionController::TestCase
  def user
    User.new(name:     "Pat Wey",
             username: "patwey",
             token:    "123abc456def")
  end

  test "#index" do
    get :index

    assert_equal 200, response.status
  end

  test "#show" do
    ApplicationController.any_instance.stubs(:current_user).returns(user)
    project_name = "corkboard"

    get :show, project_name: project_name

    assert_not_nil assigns(:repo_name)
  end
end
