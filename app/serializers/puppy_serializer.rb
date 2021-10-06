class PuppySerializer < ActiveModel::Serializer
  attributes :id, :name, :date_of_birth, :gotcha_date, :size, :favorite_toy
end
