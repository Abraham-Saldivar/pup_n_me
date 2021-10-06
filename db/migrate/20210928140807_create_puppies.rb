class CreatePuppies < ActiveRecord::Migration[6.1]
  def change
    create_table :puppies do |t|
      t.string :name
      t.string :date_of_birth
      t.string :gotcha_date
      t.string :size
      t.string :favorite_toy
      t.integer :breed_id
      t.belongs_to :pet_user
      t.timestamps
    end
  end
end
