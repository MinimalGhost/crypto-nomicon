class Api::V1::TickersController < ApplicationController

  def index
    user = current_user
    tickers = user.cryptos
    # do some fetch that will return all our tickers from third party api
    render json: tickers
  end

  def create
    user = current_user
    @ticker = Ticker.create(user_id: user.id, crypto_id: params[:crypto_id])
    tickers = user.cryptos
    render json: tickers
  end

  def destroy
    u_id = current_user.id
    c_id = params[:id]
    t = Ticker.find_by(user_id: u_id, crypto_id: c_id)
    t.destroy
    user = current_user
    tickers = user.cryptos
    render json: tickers
  end

  private
  def note_params
    params.permit(:user_id, :crypto_id)
  end

end
