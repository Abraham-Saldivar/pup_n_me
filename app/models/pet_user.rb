class PetUser < ApplicationRecord
  has_secure_password
  has_many :todos
  has_many :puppies, through: :todos
  validates :username, presence: true
end
