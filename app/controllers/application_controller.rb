class ApplicationController < ActionController::API
  include ActionController::Cookies
  
  
  private
  
  def authorize
      @user = PetUser.find_by(id: session[:user_id])
      return render json: { errors: ["Not Authorized"] }, status: :unauthorized unless @user
  end
end
