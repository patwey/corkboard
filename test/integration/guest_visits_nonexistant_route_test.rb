require 'test_helper'

class UserLogsInWithGithubTest < ActionDispatch::IntegrationTest
  test "they see the 'page not found' page" do
    visit "/pinacolada"

    assert page.has_content? "The page you were looking for doesn't exist!"
    assert page.has_link? "Go Home"
  end
end
