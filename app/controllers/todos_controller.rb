class TodosController < ApplicationController
  before_action :authorize
  skip_before_action :authorize, only: [:index]

  def index
    todos = Todo.all
    render json: todos
  end

  def create
    new_todo = Todo.create!(todo_params)
    # session[:todo] = todo.id
    render json: new_todo, status: :created
  end

  def show
    render json: @todo
  end

  def update
    update_todo = Todo.find(params[:id])
    update_todo.update!(todo_params)
    render json: update_todo, status: :accepted
  end

  def destroy
    delete_todo = Todo.find(params[:id])
    delete_todo.destroy
    head :no_content
  end

  private

  def todo_params
    params.permit(:content, :is_completed, :pet_user_id, :id)
  end
end
