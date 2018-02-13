require 'json'

class Api::V1::CryptosController < ApplicationController

  def index
    # if User.all.any? {|u| u.active }
    #   @cryptos = Crypto.all
    #   render json: @cryptos
    # else
      ## start recursive polling to api
      response = RestClient.get("https://api.coinmarketcap.com/v1/ticker/")
      iKnowKungFu = JSON.parse(response)
      iKnowKungFu.each do |obj|
        Crypto.create(name: obj['name'], symbol: obj['symbol'], rank: obj['rank'], price_usd: obj['price_usd'], price_btc: obj['price_btc'], daily_volume_usd: obj['daily_volume_usd'], market_cap_usd: obj['market_cap_usd'], available_supply: obj['available_supply'], total_supply: obj['total_supply'], percent_change_1h: obj['percent_change_1h'], percent_change_24h: obj['percent_change_24h'], percent_change_7d: obj['percent_change_7d'], last_updated: obj['last_updated'])
      end
    # end
    # @user = current_user
    @cryptos = Crypto.all
    render json: @cryptos
  end

  def show
    @crypto = Crypto.find(params[:id])
    render json: @crypto
  end

end
