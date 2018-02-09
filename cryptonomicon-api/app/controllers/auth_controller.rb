class AuthController < ApplicationController
  def login
    begin
    user = login_user(params[:username], params[:password])
      render json: {
        id: user.id,
        username: user.username,
        token: encode_token({'user_id': user.id})
      }
    rescue AuthError => e
      render json: { error: e.msg }, status: 401
    end
  end

  def currentUser
    user = current_user
    if user
      render json: { id: user.id, username: user.username }
    else
      render json: nil
    end
  end
end
