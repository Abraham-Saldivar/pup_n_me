class CreatePetUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :pet_users do |t|
      t.string :photo_url
      t.string :favorite_breed
      t.date :birthday
      t.string :password_digest
      t.string :name
      t.string :username
      t.timestamps
    end
  end
end
