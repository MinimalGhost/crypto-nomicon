class Api::V1::UsersController < ApplicationController
  def create
    @user = User.create(user_params)
    render json: @user, status: 201
  end

  def new
    @user = User.new
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end
end
