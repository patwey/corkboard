ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'
require 'minitest/pride'
require 'capybara/rails'

class ActiveSupport::TestCase
  fixtures :all
end

class ActionDispatch::IntegrationTest
  include Capybara::DSL
end
