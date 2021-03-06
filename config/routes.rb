Rails.application.routes.draw do
  root to: "welcome#index"

  post "auth/github", as: :login
  get "auth/github/callback", to: "sessions#create"
  get "/logout", as: :logout, to: "sessions#destroy"

  get "/current", to: "users#current", defaults: { format: :json }

  resources :projects, only: [:index]
  get "/projects/:project_name", to: "projects#show", constraints: { :project_name => /[^\/]+/ }

  get "*unmatched_route", to: "application#not_found"
end
