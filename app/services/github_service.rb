class GithubService
  attr_reader :user, :client

  def initialize(user)
    @user = user
    @client = Hurley::Client.new "https://api.github.com"
  end

  def repos
    response = client.get "/users/#{user.username}/repos"
    parse_json(response)
  end

  private

  def parse_json(response)
    JSON.parse(response.body)
  end
end
