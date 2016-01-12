Rails.application.routes.draw do
  root to: "welcome#index"
  resources :projects, only: [:index, :show]
end
