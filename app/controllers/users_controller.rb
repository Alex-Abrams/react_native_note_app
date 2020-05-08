class UsersController < ApplicationController

  def create
  @user = User.new(user_params)
  
  if @user.save
    login(@user)
    render "users/show.json.jbuilder"
  else
    render json: @user.errors.full_messages, status: 422
  end
end


#no idea why in ym chatchord i wouldnt have user show.... so weird

  def show
    @user = User.find(params[:id])
    if @user
      render "users/show.json.jbuilder"
      # render :show
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

private

def user_params
  params.require(:user).permit(:username, :password)
end
end
