class Api::V1::CryptosController < ApplicationController

  def index
    @cryptos = Crypto.all
    render json: @cryptos
  end

  def show
    @crypto = Crypto.find(params[:id])
    render json: @crypto
  end

  private
  def note_params
    params.permit(:name)
  end

end
