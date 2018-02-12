Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :cryptos
      resources :tickers, only: [:index, :create]
    end
  end

  post '/login', to: 'auth#login'
  get '/current_user', to: 'auth#currentUser'
  post '/signup', to: 'auth#signup'
end
