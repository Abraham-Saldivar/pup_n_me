class PuppiesController < ApplicationController
  skip_before_action :authorize, only: [:create, :index]

  def index
    puppies = Puppy.all
    render json: puppies
  end

  def create
    puppy = Puppy.create!(puppy_params)
    session[:puppy] = puppy.id
    render json: puppy, status: :created
  end

  def show
    render json: @puppy
  end

  def update
    @puppy.update!(puppy_params)
    render json: @puppy, status: :accepted
  end

  def destroy
    @puppy.destroy
    head :no_content
  end

  private

  def puppy_params
    params.permit(:name, :date_of_birth, :gotcha_date, :size, :favorite_toy, :pet_user_id, :todo_id)
  end
end
