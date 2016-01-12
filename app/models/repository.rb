class Repository
  attr_reader :name, :description

  def initialize(data)
    @name = data["name"]
    @description = data["description"]
  end
end
