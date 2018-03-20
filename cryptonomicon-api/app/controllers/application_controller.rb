class ApplicationController < ActionController::API

  private

  def create_or_update_cryptos
    response = RestClient.get("https://api.coinmarketcap.com/v1/ticker/")
    iKnowKungFu = JSON.parse(response)
    iKnowKungFu.each do |obj|
      c = Crypto.find_by(name: obj['name'])
      if c
        c.update(name: obj['name'], symbol: obj['symbol'], rank: obj['rank'], price_usd: obj['price_usd'], price_btc: obj['price_btc'], daily_volume_usd: obj['24h_volume_usd'], market_cap_usd: obj['market_cap_usd'], available_supply: obj['available_supply'], total_supply: obj['total_supply'], percent_change_1h: obj['percent_change_1h'], percent_change_24h: obj['percent_change_24h'], percent_change_7d: obj['percent_change_7d'], last_updated: obj['last_updated'])
      else
        Crypto.create(name: obj['name'], symbol: obj['symbol'], rank: obj['rank'], price_usd: obj['price_usd'], price_btc: obj['price_btc'], daily_volume_usd: obj['24h_volume_usd'], market_cap_usd: obj['market_cap_usd'], available_supply: obj['available_supply'], total_supply: obj['total_supply'], percent_change_1h: obj['percent_change_1h'], percent_change_24h: obj['percent_change_24h'], percent_change_7d: obj['percent_change_7d'], last_updated: obj['last_updated'])
      end
    end
    cryptos = Crypto.all
    cryptos
  end

  def encode_token(payload)
    JWT.encode(payload, secret, algorithm)
  end

  def login_user(username, password)
    user = User.find_by(username: username)
    if user && user.authenticate(password)
      user
    else
      raise AuthError
    end
  end

  def current_user
    User.find_by(id: user_id_from_token)
  end

  def user_id_from_token
    decode_token.first['user_id']
  end

  def decode_token
    puts 'request made ', token
    if token
      begin
        JWT.decode(token, secret, true, { algorithm: algorithm })
      rescue JWT::DecodeError
        return [{}]
      end
    else
      return [{}]
    end
  end

  def token
    request.headers['Authorization']
  end

  def secret
    "cantrip"
  end

  def algorithm
    'HS256'
  end
end

class AuthError < StandardError
  def initialize(msg="No user or invalid password")
    super
  end
end
