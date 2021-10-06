class Puppy < ApplicationRecord
  has_many :todos, dependent: :destroy
  has_many :pet_users, through: :todos

  belongs_to :breed
  belongs_to :pet_user
end
