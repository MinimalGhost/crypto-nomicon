Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :cryptos, only: :index
      resources :tickers, only: [:index, :create]
    end
  end
end
