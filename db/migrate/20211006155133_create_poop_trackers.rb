class CreatePoopTrackers < ActiveRecord::Migration[6.1]
  def change
    create_table :poop_trackers do |t|
      t.datetime :time
      t.belongs_to :puppy
      t.belongs_to :pet_user
      t.string :content

      t.timestamps
    end
  end
end
