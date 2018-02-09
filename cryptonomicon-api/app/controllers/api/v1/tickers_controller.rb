class Api::V1::TickersController < ApplicationController

  def index
    @user = User.last
    @tickers = @user.tickers
    # do some fetch that will return all our tickers from third party api
    render json: @tickers
  end

  def create
    @ticker = Ticker.create(user_id: params[:user_id], crypto_id: params[:crypto_id])
    @user = User.last
    @tickers = @user.tickers
    render json: @tickers
  end

  private
  def note_params
    params.permit(:user_id, :crypto_id)
  end

end
