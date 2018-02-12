class User < ApplicationRecord
  has_secure_password
  has_many :tickers
  has_many :cryptos, through: :tickers
end
