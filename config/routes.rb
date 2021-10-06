Rails.application.routes.draw do
  resources :poop_trackers
  resources :breeds
  resources :todos
  resources :puppies
  resources :pet_users

  # Sessions
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # Pet Users
  get "/me", to: "pet_users#show"

  # Todos
  post "/todos/:id", to: "todos#create"
  post "/poop_trackers/:id", to: "poop_trackers#create"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
