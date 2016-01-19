require 'test_helper'

class UserTest < ActiveSupport::TestCase
  def auth_info
    OmniAuth::AuthHash.new({
      provider:    "github",
      uid:         "1234",
      info:        { name: "Pat Wey" },
      extra:       { raw_info: { login: "patwey" }},
      credentials: { token: "1234abcdefg" }
    })
  end

  test "#from_omniauth creates a user with given uid" do
    user = User.from_omniauth(auth_info)

    assert_equal user, User.find_by(uid: user.uid)
  end
end
