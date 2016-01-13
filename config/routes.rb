Rails.application.routes.draw do
  root to: "welcome#index"

  post "auth/github", as: :login
  get "/auth/github/callback", to: "sessions#create"
  get "/logout", as: :logout, to: "sessions#destroy"

  get "/current", to: "users#current"

  resources :projects, only: [:index, :show]
end
