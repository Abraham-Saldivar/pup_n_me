class PoopTrackersController < ApplicationController
  before_action :authorize
  skip_before_action :authorize, only: [:index]

  def index
    trackers = PoopTracker.all
    render json: trackers
  end

  def create
    new_tracker = PoopTracker.create!(tracker_params)
    render json: new_tracker, status: :created
  end

  def show
    render json: @poop_tracker
  end

  def update
    update_tracker = PoopTracker.find(params[:id])
    update_tracker.update!(tracker_params)
    render json: update_tracker, status: :accepted
  end

  def destroy
    delete_tracker = PoopTracker.find(params[:id])
    delete_tracker.destroy
    head :no_content
  end

  private

  def tracker_params
    params.permit(:id, :time, :content, :pet_user_id, :id)
  end
end
