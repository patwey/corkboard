require 'test_helper'

class UserLogsInWithGithubTest < ActionDispatch::IntegrationTest
  def setup
    Capybara.app = Corkboard::Application
    stub_omniauth
  end

  def stub_omniauth
    OmniAuth.config.test_mode = true
    OmniAuth.config.mock_auth[:github] = OmniAuth::AuthHash.new(
      {
        provider: "github",
        uid:      "1234567",
        info:     { name: "Pat Wey" },
        extra:    { raw_info: { login: "patwey" }},
        credentials: { credentials: { token: "abcdefghijklmnop" }}
      })
  end

  def user
    User.new(name:     "Pat Wey",
             username: "patwey",
             token:    "123abc456def")
  end

  test "user can log in" do
    visit "/"
    click_link "Sign In With GitHub"

    assert_equal "/projects", current_path
    assert page.has_css? ".current-user", "Pat Wey"
  end

  test "user can see log out link" do
    ApplicationController.any_instance.stubs(:current_user).returns(user)

    visit "/"

    assert page.has_link? "My Projects"

    within ".navbar" do
      assert page.has_css? ".current-user", "Pat Wey"
      assert page.has_css? ".log-out", "Log Out"
    end
  end

  test "user can log out" do
    visit "/"
    click_link "Sign In With GitHub"
    click_link "Log Out"

    assert_equal "/", current_path
    assert page.has_link? "Sign In With GitHub"

    within ".navbar" do
      assert page.has_css? ".sign-in", "Sign In"
      refute page.has_css? ".current-user", "Pat Wey"
      refute page.has_css? ".log-out", "Log Out"
    end
  end
end
