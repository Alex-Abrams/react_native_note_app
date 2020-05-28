class SessionsController < ApplicationController
  def create
  @user = User.find_by_credentials(
    params[:user][:username],
    params[:user][:password]
  )

  if @user
    login(@user)
    render "users/show.json.jbuilder"
  else
    render json: ["Invalid username/password combination"], status: 401
  end
end

def destroy
  @user = current_user
  if @user
    logout
    render json: {}
  else
    render json: ["Nobody signed in"], status: 404
    # render json: {}, status: 400
  end
end

def update
  @user = current_user
  # @user.session_token = SecureRandom.urlsafe_base64
  render json: ["fart"]
end

#maybe because all these loggin in session tokens.... might need to see whats going
# on with having so many users still have session tokens when they should be allow_nil
#try redoing the database, checking the rootfile of chatcord,
#and ASYNCSTORAGE!!!!

end

# "hmq5U8XMQNvm-uFV8Ah2Mg"
# 'fwxv7ES34m7LDLvFIjoPvXt71/ITWSL9GLvpWs8QZ2li2pwR03ndl1sSy4+AnGksWe6f3+fEReePUf1NmICN6g=='
