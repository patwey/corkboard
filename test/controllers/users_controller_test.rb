require 'test_helper'

class UsersControllerTest < ActionController::TestCase
  def user
    User.new(name:     "Pat Wey",
             username: "patwey",
             token:    "123abc456def")
  end

  test "#current" do
    ApplicationController.any_instance.stubs(:current_user).returns(user)

    get :current, format: :json

    assert_equal 200, response.status
    assert_equal user.to_json, response.body
  end
end
