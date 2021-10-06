class PoopTrackerSerializer < ActiveModel::Serializer
  attributes :id, :time, :content, :pet_user_id, :id
end
