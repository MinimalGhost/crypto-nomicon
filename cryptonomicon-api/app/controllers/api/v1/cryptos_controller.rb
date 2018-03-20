require 'json'

class Api::V1::CryptosController < ApplicationController

  def index
    @cryptos = create_or_update_cryptos
    render json: @cryptos
  end

  def show
    @crypto = Crypto.find(params[:id])
    render json: @crypto
  end

end
