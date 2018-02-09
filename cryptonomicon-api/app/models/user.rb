class User < ApplicationRecord
  has_many :tickers
  has_many :cryptos, through: :tickers
end
