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

  test "logging in" do
    visit "/"
    click_link "Sign In With GitHub"

    assert_equal "/projects", current_path
    assert page.has_content? "Pat Wey"
  end
end
