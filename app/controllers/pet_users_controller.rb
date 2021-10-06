class PetUsersController < ApplicationController
  before_action :authorize
  skip_before_action :authorize, only: [:create]
  wrap_parameters format: []

  def index
    users = PetUser.all
    render json: users
  end

  def create
    user = PetUser.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def show
    user = PetUser.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

  def update
    @pet_user.update!(user_params)
    render json: @user, status: :accepted
  end

  def destroy
    @pet_user.destroy
    head :no_content
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation, :photo_url, :favorite_breed, :birthday, :user_name, :name)
  end
end
