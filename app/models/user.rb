class User < ActiveRecord::Base
  def self.from_omniauth(auth)
    where(uid: auth[:uid]).first_or_create do |new_user|
      new_user.provider = auth["provider"]
      new_user.uid      = auth["uid"]
      new_user.name     = auth["info"]["name"]
      new_user.username = auth["extra"]["raw_info"]["login"]
    end
  end

  def service
    GithubService.new(self)
  end

  def repos
    service.repos.map do |repo|
      Repository.new(repo)
    end
  end
end
