class TodoSerializer < ActiveModel::Serializer
  attributes :content, :is_completed, :pet_user_id, :id
end
