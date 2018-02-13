Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :cryptos
      resources :tickers, only: [:index, :create, :destroy]
      resources :users
    end
  end

  post '/login', to: 'auth#login'
  post '/logout', to: 'auth#logout'
  get '/current_user', to: 'auth#currentUser'
  post '/signup', to: 'auth#signup'
end
