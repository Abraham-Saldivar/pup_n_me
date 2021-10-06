class PetUserSerializer < ActiveModel::Serializer
  attributes :id, :photo_url, :favorite_breed, :birthday, :username, :name
end
