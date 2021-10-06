class PoopTracker < ApplicationRecord
  belongs_to :puppy, optional: true
  belongs_to :pet_user, optional: true
end
