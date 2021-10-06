class CreateTodos < ActiveRecord::Migration[6.1]
  def change
    create_table :todos do |t|
      t.string :content
      t.boolean :is_completed
      t.belongs_to :pet_user
      t.belongs_to :puppy
      t.timestamps
    end
  end
end
