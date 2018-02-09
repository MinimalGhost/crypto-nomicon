class Crypto < ApplicationRecord
  has_many :tickers
  has_many :users, through: :tickers
end
