Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :cryptos
      resources :tickers, only: [:index, :create]
    end
  end
end
